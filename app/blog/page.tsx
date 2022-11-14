import { getPosts, getPost, getMarkdown } from "./inc/markdown_api";
import "../../styles/globals.css";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post: any) => {
        return (
          <>
            <article>
              <Link href={`/blog/${post.name.replace(/\.[^/.]+$/, "")}`}>
                <h2>{post.name.replace(/\.[^/.]+$/, "")}</h2>
              </Link>
            </article>
          </>
        );
      })}
    </>
  );
}
