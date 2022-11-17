import { getPosts } from "../../utils/markdown_api";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <p>
        The blog posts are saved in a github private repo and fetched using the
        github API. I then parse the markdown with micromark in an internal API
        I created. You can view the source code on my github.
      </p>
      {posts.map((post: any) => {
        let title = post.name.replace(/\.[^/.]+$/, "");
        return (
          <>
            <div>
              <Link href={`/blog/${title}`} title={title}>
                <h2 className="blog-headline">{title}</h2>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}
