import "./navigation-componet.css";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/">projects</Link>
      <Link
        href="https://docs.google.com/document/d/1wtDYafDMy_X9l25SDa0fA-vmgJGc-ULu2zg2WlwZCrI/edit?usp=sharing"
        className="navigation-links"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </Link>
      <Link
        href="https://www.linkedin.com/in/mugisha-karekezi-joel-58a1723a9/"
        className="navigation-links"
        target="_blank"
        rel="noopener noreferrer"
      >
        linked in
      </Link>
      <Link
        href="https://github.com/mkkarekezi/"
        className="navigation-links"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </Link>
    </nav>
  );
}
