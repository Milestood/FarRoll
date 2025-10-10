import type { NextApiRequest, NextApiResponse } from "next";

const rolls: Record<string, { count: number; lastDate: string }> = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const wallet = req.query.wallet as string;
  if (!wallet) return res.status(400).json({ error: "wallet required" });

  const today = new Date().toISOString().slice(0, 10);
  if (!rolls[wallet] || rolls[wallet].lastDate !== today) {
    rolls[wallet] = { count: 0, lastDate: today };
  }

  if (rolls[wallet].count >= 3) {
    return res.status(403).json({ error: "Günlük 3 hakkını kullandın" });
  }

  const dice = Math.floor(Math.random() * 6) + 1;
  rolls[wallet].count++;

  return res.status(200).json({ result: dice, remaining: 3 - rolls[wallet].count });
}
