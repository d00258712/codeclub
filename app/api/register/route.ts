import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';
import bcrypt from 'bcryptjs';


export async function POST(req: Request) {
  try {
    
    const { name, email, password, role } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    
    await sql`
      INSERT INTO users (name, email, password, role)
      VALUES (${name}, ${email}, ${hashedPassword}, ${role || 'coder'});
    `;

    return NextResponse.json({ message: 'User registered successfully!' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
