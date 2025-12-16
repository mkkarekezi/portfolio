import "../css/navigation-componet.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="#" className="navigation-links">
        mugisha k joel | portfolio
      </Link>
      <Link href="#" className="navigation-links">
        about me
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
      <Link href="#" className="navigation-links">
        resume
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
      <Link href="#" className="navigation-links">
        email address
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
      <Link href="#" className="navigation-links">
        linked in
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
      <Link href="#" className="navigation-links">
        github
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
    </nav>
  );
}
