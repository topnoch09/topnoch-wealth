const GHL_BASE = "https://services.leadconnectorhq.com";

export interface GhlUpsertInput {
  email: string;
  name?: string;
  phone?: string;
  tags?: string[];
  customFields?: Record<string, string>;
}

function splitName(full?: string): { firstName?: string; lastName?: string } {
  if (!full) return {};
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0] };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export async function upsertGhlContact(input: GhlUpsertInput) {
  const token = process.env.GHL_PIT_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return null;

  const { firstName, lastName } = splitName(input.name);

  const body: Record<string, unknown> = {
    locationId,
    email: input.email,
  };
  if (firstName) body.firstName = firstName;
  if (lastName) body.lastName = lastName;
  if (input.phone) body.phone = input.phone;
  if (input.tags?.length) body.tags = input.tags;
  if (input.customFields) {
    body.customFields = Object.entries(input.customFields).map(([key, value]) => ({
      key,
      field_value: value,
    }));
  }

  const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) return null;
  return res.json();
}
