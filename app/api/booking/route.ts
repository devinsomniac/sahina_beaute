import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming booking body:", body);

    const {
      firstName,
      lastName,
      phone,
      email,
      date,
      service,
      notes,
    } = body;

    if (!firstName || !lastName || !phone || !email || !date || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    console.log("GOOGLE_SCRIPT_URL:", scriptUrl);

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_URL is missing.",
        },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        date,
        service,
        notes,
      }),
    });

    const rawText = await googleResponse.text();

    console.log("Google response status:", googleResponse.status);
    console.log("Google response text:", rawText);

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Apps Script did not return valid JSON.",
          rawResponse: rawText,
        },
        { status: 500 }
      );
    }

    if (!googleResponse.ok || !parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.message || "Failed to save booking in Google Sheets.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking saved successfully.",
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}