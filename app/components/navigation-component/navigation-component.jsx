import "./navigation-componet.css";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/">projects</Link>
      <Link
        href="https://drive.google.com/file/d/1s_jSF2ZwWmaf6DHAuetO6WaVBLTeigBp/view?usp=sharing"
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
