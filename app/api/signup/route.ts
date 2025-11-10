import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
  );
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const name = typeof payload?.name === "string" ? payload.name.trim() : "";
    const company =
      typeof payload?.company === "string" ? payload.company.trim() : "";
    const phone =
      typeof payload?.phone === "string" ? payload.phone.trim() : "";
    const email =
      typeof payload?.email === "string" ? payload.email.trim() : "";

    if (!name || !company || !phone || !email) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("signups").insert({
      name,
      company,
      phone,
      email,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message ?? "Failed to save signup." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected error processing signup.",
      },
      { status: 500 },
    );
  }
}

