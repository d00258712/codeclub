import { neon } from '@neondatabase/serverless';

// Ensure DATABASE_URL is defined in your .env file
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in .env.local or environment variables.');
}

// Create the connection using the Neon serverless driver
const sql = neon(process.env.DATABASE_URL);

export async function saveComponent(name: string, code: string) {
  try {
    await sql`
      INSERT INTO components (name, code) VALUES (${name}, ${code})
    `;
    return { message: 'Component saved successfully!' };
  } catch (error) {
    console.error('Error saving component:', error);
    throw error;
  }
}


export default sql;
