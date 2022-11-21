import { getPosts, getMarkdownByPost } from "../../../utils/markdown_api";
import Post from "./post";

export default async function Page({ params }) {
  const content = await getMarkdownByPost(params.slug);
  return <Post content={content} />;
}

