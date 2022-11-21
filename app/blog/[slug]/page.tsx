import { getPosts, getPost, markdownToHtml } from "../../../utils/markdown_api";
import Post from "./post";

const getMarkdownByPost = async (slug: any) => {
  const post = await getPost(`${slug}.md`);
  const res = await fetch(post.download_url);
  const markdown = await markdownToHtml(await res.text());
  return markdown;
};

export default async function Page({ params }) {
  const content = await getMarkdownByPost(params.slug);
  return (
    <>
      <Post content={content} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => ({
    slug: post.name.replace(/\.[^/.]+$/, ""),
  }));
}
