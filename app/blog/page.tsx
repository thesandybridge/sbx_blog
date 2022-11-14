import { getPosts } from "../../utils/markdown_api";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post: any) => {
        let title = post.name.replace(/\.[^/.]+$/, "");
        return (
          <>
            <div>
              <Link href={`/blog/${title}`} title={title}>
                <h2>{title}</h2>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}
