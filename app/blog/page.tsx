import { getPosts } from "../../utils/markdown_api";
import Link from "next/link";

const Page = async () => {
  const posts = await getPosts();

  return (
    <>
      <h1>Blog, Guides, Notes</h1>
      <p>
        This is collection of blog posts on whatever I feel like writing about,
        as well as some guides I wrote. I also keep some notes here for personal
        use that I have marked public.
      </p>
      <p>
        The blog posts are saved in a github private repo and fetched using the
        github API. I then parse the markdown with micromark in an internal API
        I created. You can view the source code on my github.
      </p>
      <article className="post-archive">
        {posts.map((post: any) => {
          let title = post.name.replace(/\.[^/.]+$/, "");
          return (
            <>
              <Link href={`/blog/${title}`} title={title}>
                <h2 className="blog-headline">{title}</h2>
              </Link>
            </>
          );
        })}
      </article>
    </>
  );
};

export default Page;
