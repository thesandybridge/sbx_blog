import { getPosts, getPost, getMarkdown } from "../../../utils/markdown_api";

export default async function Page({ params }) {
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
    slug: post.name.replace(/\.[^/.]+$/, ""),
  }));
}
