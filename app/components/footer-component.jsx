import "../css/footer-component.css";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <main className="footer-section-main">
        <div className="footer-section-main-wrapper">
          <p className="footer-section-main-wrapper-txt">
            2025 | Mugisha K Joel
          </p>
          <p className="footer-section-main-wrapper-txt">
            ©2025 OCTAVIO BREHM
            <br />
            Music by: GNTLMN - Undrsound
            <br />
            Soul Silent Connection
          </p>
          <div className="footer-section-main-wrapper-contacts">
            <Link
              className="footer-section-main-wrapper-contaacts-links"
              href="#"
            >
              email
            </Link>
            <Link
              className="footer-section-main-wrapper-contaacts-links"
              href="#"
            >
              linked in
            </Link>
            <Link
              className="footer-section-main-wrapper-contaacts-links"
              href="#"
            >
              resume
            </Link>
            <Link
              className="footer-section-main-wrapper-contaacts-links"
              href="#"
            >
              github
            </Link>
          </div>
          <div className="footer-section-main-wrapper-navigation">
            <Link
              className="footer-section-main-wrapper-navigation-links"
              href="#"
            >
              work
            </Link>
            <Link
              className="footer-section-main-wrapper-navigation-links"
              href="#"
            >
              about
            </Link>
          </div>
        </div>
      </main>

      <header className="footer-section-header">
        <div className="footer-section-header-heaading">
          <h1 className="footer-section-header-heaading-h">developing</h1>
          <h1 className="footer-section-header-heaading-h">to “inspire”</h1>
        </div>

        <img
          className="footer-section-header-image"
          src="/media/profile-image.png"
        ></img>
      </header>
    </footer>
  );
}
