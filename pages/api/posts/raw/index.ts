import { NextApiRequest, NextApiResponse } from 'next'
import { getMarkdown  } from '../../../../utils/markdown_api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const posts = await getMarkdown();
        res.status(200).json({posts})
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
}
