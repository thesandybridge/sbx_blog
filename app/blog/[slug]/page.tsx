import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { cache } from "react";
import "../../../styles/globals.css";

const getPosts = cache(async () => {
  const res = await fetch(process.env.GITHUB_ENDPOINT, {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  console.log(res.json);
  return res.json();
});

async function getPost(slug) {
  const posts = await getPosts();
  const post = posts.find((post) => post.name === slug);
  return post;
}

async function markdownToHtml(markdown: string) {
  const result = micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });
  return result;
}

async function getMarkdown(slug) {
  const post = await getPost(slug);
  const res = await fetch(post.download_url);
  const markdown = await markdownToHtml(await res.text());
  return markdown;
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);
  const content = await getMarkdown(params.slug);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => ({
    slug: post.name,
  }));
}
