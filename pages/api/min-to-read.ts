// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  minToRead: number
}

function minutesToRead(words: string[]) {
  const wordsPerMinute = 255
  const wordsCount = words.length
  const minutes = wordsCount / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return readTime
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allWords: string[] = req.body.words.split(' ')
  const minToRead = minutesToRead(allWords)
  res.status(200).json({ minToRead: minToRead })
}
