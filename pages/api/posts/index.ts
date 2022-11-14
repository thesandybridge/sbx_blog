import { NextApiRequest, NextApiResponse } from 'next'
import { cache } from "react";

const getPosts = cache(async () => {
  const res = await fetch(process.env.GITHUB_ENDPOINT, {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  console.log(res.json);
  return res.json();
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const posts = await getPosts();
        res.status(200).json({posts})
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
}
