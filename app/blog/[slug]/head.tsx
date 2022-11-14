import { getPosts, getPost, getMarkdown } from "../inc/markdown_api";

export default async function Head({ params }) {
  return (
    <>
      <title>{`thesbx | Blog: ${params.slug}`}</title>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => ({
    slug: post.name.replace(/\.[^/.]+$/, ""),
  }));
}
