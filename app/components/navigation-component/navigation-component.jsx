import "./navigation-componet.css";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="#" className="navigation-links">
        projects
      </Link>
      <Link href="#" className="navigation-links">
        about me
      </Link>
      <Link href="#" className="navigation-links">
        resume
      </Link>
      <Link href="#" className="navigation-links">
        linked in
      </Link>
      <Link href="#" className="navigation-links">
        github
      </Link>
    </nav>
  );
}
