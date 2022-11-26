import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";

type Post = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: object;
}

/**
 * Fetch all posts from the Github API.
 * @returns 
 */
const getPosts = async () => {
    const res = await fetch(process.env.GITHUB_ENDPOINT, {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    return res.json();
};

/**
 * Get a post by slug from the Github API.
 * @param slug string containing the slug of the post.
 * @returns 
 */
const getPost = async (slug: string) => {
  const res = await fetch(`${process.env.GITHUB_ENDPOINT}/${slug}.md`, {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  return res.json();
}

/**
 * Parse mardown to HTML and return the html.
 * @param markdown 
 * @returns 
 */
const markdownToHtml = async(markdown: string) => {
  const result = micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });
  return result;
}

/**
 * Fetch post by slug from the Github API and then convert it to html. Returns the html payload.
 * @param slug string containing the slug of the post.
 * @returns 
 */
const getMarkdownByPost = async (slug: string) => {
  const payload = await getPost(slug)
  .then(async (post: Post) => {
    const res = await fetch(post.download_url)
    const markdown = await markdownToHtml(await res.text())
    return markdown
  })
  return payload;
}

/**
 * Fetch all posts from the Github API and then convert it to html. Returns the html payload for each post.
 * @returns 
 */
const getMarkdown = async () => {
  const posts = await getPosts();
  const payload = await Promise.all(posts.map(async (post: Post) => {
    const res = await fetch(post.download_url);
    const markdown = await markdownToHtml(await res.text())
    return markdown;
  }));
  return payload;
}

export {getPosts, getMarkdownByPost, getMarkdown}