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
          imageSrc="./media/akagera-roam.jpg"
          template_logo="/icons/akagera-roam-logo.svg"
          title="akagera roam"
          project_title="akagera roam"
          project_Description={`The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems. 
           \n\
           \n\
          The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that`}
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </>
          }
          project_links={
            <>
              <Link
                href="https://github.com/mkkarekezi/akagera-roam"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - web deve
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
              <Link
                href="https://github.com/mkkarekezi/akagera-roam-model"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - ml model
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
              <Link
                href="https://akagera-roam.vercel.app/"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                live project
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
            </>
          }
        />

        <ProjectComponent
          imageSrc="./media/rwanda-demographics.jpg"
          template_logo="/icons/rwanda-demographics-logo.svg"
          title="rwanda demographics"
          project_title="akagera roam"
          project_Description={`The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems. 
           \n\
           \n\
          The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that`}
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </>
          }
          project_links={
            <>
              <Link
                href="https://github.com/mkkarekezi/rwanda-demographic"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - ml model
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
            </>
          }
        />

        <ProjectComponent
          imageSrc="./media/vitee-cv.jpg"
          template_logo="/icons/vitee-cv-logo.svg"
          title="vitee-cv"
          project_title="akagera roam"
          project_Description={`The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems. 
           \n\
           \n\
          The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that`}
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </>
          }
          project_links={
            <>
              <Link
                href="https://github.com/mkkarekezi/vitee-cv"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - web dev
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
              <Link
                href="https://vitee-cv.vercel.app/"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                live project
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
            </>
          }
        />

        <ProjectComponent
          imageSrc="./media/car-trader.webp"
          template_logo="/icons/car-trader-logo.svg"
          title="car trader"
          project_title="akagera roam"
          project_Description={`The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that doesn’t yet exist. We need more than head-turning aesthetics, we need perspective-shifting impact. This is how we break down barriers and solve problems. 
           \n\
           \n\
          The magic of design is that it’s literally life changing. It’s changed my life, of course, but it changes the life of every user too. A great house build starts with a solid foundation. And it takes great vision to see an end goal that`}
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </>
          }
          project_links={
            <>
              <Link
                href="https://github.com/mkkarekezi/car-trader"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - web dev
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
              <Link
                href="https://github.com/mkkarekezi/car-trader-model"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - ml model
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
              <Link
                href="https://github.com/mkkarekezi/rwanda-demographic"
                className="project-links-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code - ml model
                <img src="/icons/arrow-up-right.svg" alt="" />
              </Link>
            </>
          }
        />

        <footer className="home-main-footer">
          <div className="home-main-fooeter-wrapper">
            <h3 className="home-main-fooeter-wrapper-h3">
              hi again, wanna send me a chat
            </h3>
            <div className="home-main-fooeter-wrapper-par">
              m.kkarekezi@gmail.com
            </div>
          </div>
          <h1 className="home-main-fooeter-h1">developing to “inspire”</h1>
        </footer>
      </main>
    </section>
  );
}
