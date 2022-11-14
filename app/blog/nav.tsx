import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
    </nav>
  );
}
