import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTerminal,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <Link href={"/"} title="Home">
        <FontAwesomeIcon icon={faDungeon} />
      </Link>
      <div className="utility-nav">
        <Link href={"/blog"} title="Blog">
          <FontAwesomeIcon icon={faBook} />
        </Link>
      </div>
    </nav>
  );
}
