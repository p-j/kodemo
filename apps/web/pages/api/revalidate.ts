import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.WEB_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    if (typeof req.query.path === 'string') {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate(req.query.path)
      return res.json({ revalidated: true })
    } else {
      return res.status(400).send('Query parameter "path" is not a string.')
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.error(err)
    return res.status(500).send('Error revalidating')
  }
}
