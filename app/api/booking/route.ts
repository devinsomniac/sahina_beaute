import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const isValidPreferredTime = (time: string) => {
  return time >= "08:00" && time <= "22:00";
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      date,
      preferredTime,
      service,
      notes,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !date ||
      !preferredTime ||
      !service
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidPreferredTime(preferredTime)) {
      return NextResponse.json(
        {
          success: false,
          message: "Preferred time must be between 08:00 and 22:00.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    if (!process.env.SALON_RECEIVER_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message: "SALON_RECEIVER_EMAIL is missing.",
        },
        { status: 500 }
      );
    }

    const customerName = `${firstName} ${lastName}`.trim();

    const ownerEmail = await resend.emails.send({
      from: "Sahina Beauté <contact@sahinabeaute.fr>",
      to: process.env.SALON_RECEIVER_EMAIL,
      subject: `New Booking Request from ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Notes:</strong> ${notes || "No notes provided"}</p>
        </div>
      `,
    });

    if (ownerEmail.error) {
      console.error("Resend owner email error:", ownerEmail.error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send booking email.",
        },
        { status: 500 }
      );
    }

    const customerEmail = await resend.emails.send({
      from: "Sahina Beauté <contact@sahinabeaute.fr>",
      to: email,
      subject: "We received your booking request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank you for your booking request</h2>
          <p>Hi ${customerName},</p>
          <p>We have received your booking request.</p>
          <p><strong>Requested date:</strong> ${date}</p>
          <p><strong>Preferred time:</strong> ${preferredTime}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p>We will contact you shortly to confirm your appointment.</p>
        </div>
      `,
    });

    if (customerEmail.error) {
      console.error("Resend customer email error:", customerEmail.error);
    }

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully.",
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}