import { getPosts, getMarkdown } from "../../../utils/markdown_api";
import Post from "./post";

export default async function Page() {
  const content = await getMarkdown();
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
