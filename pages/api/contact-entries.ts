import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const entries = await prisma.contact.findMany({
        orderBy: { createdAt: 'desc' }
      });
      res.status(200).json(entries); // <-- Make sure this is an array!
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch entries' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}