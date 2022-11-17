import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <Link href={"/"} title="Home">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link href={"/blog"} title="Blog">
        <FontAwesomeIcon icon={faBook} />
      </Link>
    </nav>
  );
}
