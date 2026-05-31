import { NextRequest, NextResponse } from "next/server";
import { sendAssessmentEmails } from "@/lib/email";
import { upsertGhlContact } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, score, obstacle, stage, amount, name, phone } = data;

  if (!email || typeof score !== "number") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
  const tasks: Promise<unknown>[] = [];

  if (ghlUrl) {
    tasks.push(
      fetch(ghlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "fundability-assessment",
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => null)
    );
  }

  tasks.push(
    upsertGhlContact({
      email,
      name,
      phone,
      tags: [
        "fundability-assessment",
        `score-${score >= 80 ? "high" : score >= 50 ? "mid" : "low"}`,
        `obstacle-${obstacle || "unknown"}`,
        `stage-${stage || "unknown"}`,
      ],
      customFields: { fundability_score: String(score) },
    }).catch(() => null)
  );

  tasks.push(
    sendAssessmentEmails({ email, score, obstacle, stage, amount, name, phone }).catch(() => null)
  );

  await Promise.allSettled(tasks);

  return NextResponse.json({ ok: true });
}
