import { getPosts, getPost, getMarkdown } from "../inc/markdown_api";
import "../../../styles/globals.css";

export default async function Page({ params }) {
  const post = await getPost(params.slug);
  const content = await getMarkdown(params.slug);
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => ({
    slug: post.name,
  }));
}
