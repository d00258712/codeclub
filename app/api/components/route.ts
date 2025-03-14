import { NextResponse } from "next/server";
import sql from "@/app/lib/data";


export async function POST(req: Request) {
  try {
    const { name, code } = await req.json();

    
    const wrappedCode = `
      import React from 'react';
      function Component() {
        return (${code});
      }
      export default Component;
    `;

    await sql`
      INSERT INTO components (name, code)
      VALUES (${name}, ${wrappedCode})
      ON CONFLICT (name) DO UPDATE SET code = EXCLUDED.code;
    `;

    return NextResponse.json({ message: "Component stored successfully!" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


export async function GET() {
  try {
    const components = await sql`
      SELECT name, code FROM components;
    `;
    return NextResponse.json(components);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

