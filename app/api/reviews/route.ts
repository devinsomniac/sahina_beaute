import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ReviewRow = {
  id: number;
  name: string;
  role: string;
  quote: string;
  created_at: string;
};

export async function GET() {
  try {
    const reviews = (await sql`
      SELECT id, name, role, quote, created_at
      FROM reviews
      WHERE approved = TRUE
      ORDER BY created_at DESC
      LIMIT 6
    `) as ReviewRow[];

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("GET /api/reviews error:", error);

    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body?.name?.trim();
    const role = body?.role?.trim();
    const quote = body?.quote?.trim();

    if (!name || !role || !quote) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 60) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (role.length > 80) {
      return NextResponse.json(
        { error: "Role is too long." },
        { status: 400 }
      );
    }

    if (quote.length > 500) {
      return NextResponse.json(
        { error: "Review is too long." },
        { status: 400 }
      );
    }

    const inserted = (await sql`
      INSERT INTO reviews (name, role, quote, approved)
      VALUES (${name}, ${role}, ${quote}, TRUE)
      RETURNING id, name, role, quote, created_at
    `) as ReviewRow[];

    return NextResponse.json(
      {
        message: "Review submitted successfully.",
        review: inserted[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/reviews error:", error);

    return NextResponse.json(
      { error: "Failed to submit review." },
      { status: 500 }
    );
  }
}