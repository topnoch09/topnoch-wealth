import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, subject, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ghlUrl = process.env.NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL;
  const tasks: Promise<unknown>[] = [];

  if (ghlUrl) {
    tasks.push(
      fetch(ghlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "contact-form",
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => null)
    );
  }

  tasks.push(
    sendContactEmails({ name, email, phone, subject, message }).catch(() => null)
  );

  await Promise.allSettled(tasks);

  return NextResponse.json({ ok: true });
}
