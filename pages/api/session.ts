import { getSession, Session } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function session(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data: Session = await getSession(req, res)

    if (data == null) {
      res.status(403).json({
        error: true,
        message: 'Session timed out or non-existent. Please re-authenticate.',
        code: 403,
      })
    } else {
      res.json(data)
    }
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).json({
      error: true,
      message: 'Internal server error',
      code: 500,
    })
  }
}