import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Form submitted:', { name, email, subject, message });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
export function GET(){
  return NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
}