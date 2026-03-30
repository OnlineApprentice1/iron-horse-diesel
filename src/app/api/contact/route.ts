import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const payload = body as Partial<ContactPayload>;

  // Validate required fields
  if (!payload.name || typeof payload.name !== "string" || payload.name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!payload.email || typeof payload.email !== "string" || !isValidEmail(payload.email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  if (
    !payload.message ||
    typeof payload.message !== "string" ||
    payload.message.trim().length === 0
  ) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const sanitised: ContactPayload = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() ?? "",
    service: payload.service?.trim() ?? "",
    message: payload.message.trim(),
  };

  // TODO: Integrate Resend for transactional email
  // Example:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.emails.send({
  //   from: "contact@ironhorsediesel.ca",
  //   to: "service@ironhorsediesel.ca",
  //   subject: `New contact: ${sanitised.name} — ${sanitised.service || "General enquiry"}`,
  //   text: `
  //     Name: ${sanitised.name}
  //     Email: ${sanitised.email}
  //     Phone: ${sanitised.phone}
  //     Service: ${sanitised.service}
  //     Message: ${sanitised.message}
  //   `,
  // });

  console.info("[contact] New submission:", {
    name: sanitised.name,
    email: sanitised.email,
    service: sanitised.service,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Message received. We'll be in touch shortly.",
    },
    { status: 200 }
  );
}
