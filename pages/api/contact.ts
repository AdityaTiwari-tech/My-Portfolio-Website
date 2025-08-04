import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    try {
      const entry = await prisma.contact.create({
        data: { name, email, subject, message },
      });
      res.status(200).json({ success: true, entry });
    } catch (error) {
      const errorMessage = typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message: string }).message
        : 'An unknown error occurred';
      res.status(500).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}