import { NextResponse } from "next/server";
import sql from "@/app/lib/data";

// ✅ Fix CORS: Allow frontend to access API
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// ✅ Handle CORS Preflight Requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ✅ Store a component in the database
export async function POST(req: Request) {
  try {
    const { name, code } = await req.json();

    if (!name || !code) throw new Error("Missing component name or code.");

    // ✅ Remove 'export default' before storing
    const cleanedCode = code.replace(/^export\s+default\s+/, "");

    await sql`
      INSERT INTO components (name, code)
      VALUES (${name}, ${cleanedCode})
      ON CONFLICT (name) DO UPDATE SET code = EXCLUDED.code;
    `;

    return NextResponse.json({ message: "Component stored successfully!" }, { headers: corsHeaders });
  } catch (error) {
    console.error("❌ Error storing component:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500, headers: corsHeaders });
  }
}

// ✅ Fetch stored components from the database
export async function GET() {
  try {
    const components = await sql`
      SELECT name, code FROM components;
    `;

    return NextResponse.json(components, { headers: corsHeaders });
  } catch (error) {
    console.error("❌ Error fetching components:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500, headers: corsHeaders });
  }
}
