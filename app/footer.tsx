export default function Footer() {
  return (
    <footer>
      <p>
        The blog posts are saved in a github private repo and fetched using the
        github API. I then parse the markdown with micromark in an internal API
        I created. You can view the source code on my github.
      </p>
      <p>© Copyright | {new Date().getFullYear()}</p>
    </footer>
  );
}
