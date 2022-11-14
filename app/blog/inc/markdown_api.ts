import { cache } from "react";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import {frontmatter, frontmatterHtml} from 'micromark-extension-frontmatter'

const getPosts = cache(async () => {
    const res = await fetch(process.env.GITHUB_ENDPOINT, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    console.log(res.json);
    return res.json();
});

const getPost = async (slug: any) => {
    const posts = await getPosts();
    const post = posts.find((post: any) => post.name === slug);
    return post;
}

const markdownToHtml = async(markdown: string) => {
  const result = micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });
  return result;
}

const getMarkdown = async (slug: any) => {
  const post = await getPost(`${slug}.md`);
  const res = await fetch(post.download_url);
  const markdown = await markdownToHtml(await res.text());
  return markdown;
}

export {getPosts, getPost, getMarkdown}