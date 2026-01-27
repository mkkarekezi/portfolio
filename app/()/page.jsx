import "./page.css";
import Link from "next/link";
import { ProjectComponent } from "../components/project-componet/project-component.jsx";
import { Navigation } from "../components/navigation-component/navigation-component.jsx";

export default function Home() {
  return (
    <section className="home">
      <aside className="home-aside">
        <h3 className="home-aside-title">projects list</h3>
        <Link className="home-aside-links" href="#">
          car trader
        </Link>
        <Link className="home-aside-links" href="#">
          scroll news app
        </Link>
        <Link className="home-aside-links" href="#">
          akagera raom
        </Link>
        <Link className="home-aside-links" href="#">
          rwanda demographic
        </Link>
      </aside>
      <main className="home-main">
        <Navigation />
        <h1 className="home-main-title">
          hi there i’m joel mugisha, <span>a full</span>
          <span>stack software engineer</span> who specialized in{" "}
          <span>machine learning</span>
        </h1>

        <h3 className="home-main-desc">
          <img src="/icons/dot.svg" alt="" />
          featured projects i have developed
        </h3>

        <ProjectComponent
          imageSrc="./media/test-img-1.jpg"
          template_logo="/icons/project-logo.svg"
          titleOne="akagera"
          titleTwo="roam"
          project_Description={`The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems. 
            <br/>
            <br/>
            The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that`}
          project_speciality_one="Fast and responsive UI"
          project_speciality_two="Highly maintainable code"
          source_link="https://github.com/yourrepo"
          project_link="https://yourlivesite.com"
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </>
          }
        />
      </main>
    </section>
  );
}
