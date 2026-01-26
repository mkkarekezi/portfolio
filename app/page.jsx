import "./css/home-route.css";
import Link from "next/link";
import FooterSection from "./components/footer-component.jsx";
import ProjectTemplate from "./components/project-component.jsx";
import Navigation from "./components/navigation-component.jsx";

export default function Home() {
  return (
    <section className="home-route">
      <div className="home-route-wrapper">
        <aside className="home-route-wrapper-aside">
          <h3 className="home-route-wrapper-aside-title">projects list</h3>
          <div className="home-route-wrapper-aside-links">
            <Link href="#">car trader</Link>
            <Link href="#">scroll news app</Link>
            <Link href="#">akagera raom</Link>
            <Link href="#">rwanda demographic</Link>
          </div>
        </aside>
        <main className="home-route-wrapper-main">
          <Navigation />
          <header className="home-route-wrapper-main-header">
            <h1 className="home-route-wrapper-main-header-h">
              hi there i’m joel mugisha, <span>a full</span>
            </h1>
            <h1 className="home-route-wrapper-main-header-h">
              <span>stack software engineer</span> who
            </h1>
            <h1 className="home-route-wrapper-main-header-h">
              specialized in <span>machine learning</span>
            </h1>
          </header>
          <div className="home-route-wrapper-main-desc">
            <img src="/icons/dot.svg" alt="" />
            featured projects i have developed
          </div>
          <ProjectTemplate
            imageSrc="./media/test-img-1.jpg"
            template_logo="/icons/project-logo.svg"
            titleOne="akagera"
            titleTwo="roam"
            project_Description_one="The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems."
            project_Description_two="The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that"
            project_speciality_one="Fast and responsive UI"
            project_speciality_two="Highly maintainable code"
            teck_stack={
              <>
                <div className="teck-stack">
                  <div className="teck-stack-wrapper">
                    <img src="/icons/next.js.svg" alt="" />
                    <p>NextJs</p>
                  </div>
                </div>
              </>
            }
          />
        </main>
      </div>
      <FooterSection />
    </section>
  );
}
