import "./page.css";
import Link from "next/link";
import { ProjectComponent } from "../components/project-componet/project-component.jsx";
import { Navigation } from "../components/navigation-component/navigation-component.jsx";

export default function Home() {
  return (
    <section className="home">
      <aside className="home-aside">
        <p className="home-aside-title">projects list</p>
        <p className="home-aside-p">akagera roam</p>
        <p className="home-aside-p">rwanda demographic</p>
        <p className="home-aside-p">vitee-cv</p>
        <p className="home-aside-p">car trader</p>
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
          project_title="akagera roam (web development & machine learning)"
          project_Description={`Akagera Roam is a machine learning project designed to identify major tourist animals in national parks. It uses image classification and object detection to recognize seven animals: lion, zebra, elephant, leopard, cape buffalo, and rhinoceros.

          The project helps reduce time wasted on manual animal tracking and can be used with drones for faster and more efficient wildlife monitoring. This supports better conservation and tourism management.

          Through this project, I learned how to fine-tune a YOLO model for object detection, build an image classification model using TensorFlow, and integrate machine learning with a web application.

          The technologies used include Next.js for frontend development, TensorFlow for classification modeling, YOLO for object detection, FastAPI for model deployment, and Figma for UI design.`}
          teck_stack={
            <>
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
              <img src="/icons/tensorflow.svg" alt="" />
              <img src="/icons/Fastapi.svg" alt="" />
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
                source code - web dev
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
          project_title="rwanda demographics (machine learnign)"
          project_Description={`Rwanda Demographics Prediction is a machine learning project used to predict population trends using key factors such as population size, fertility rate, death rate, birth rate, and life expectancy.

          The project helps with planning for the future by supporting better decision-making in areas like health, education, and economic development.The model was built using TensorFlow to analyze demographic data and make accurate predictions.`}
          teck_stack={
            <>
              <img src="/icons/tensorflow.svg" alt="" />
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
          project_title="vitee-cv (web development & llms)"
          project_Description={`Vitee CV is an AI-powered platform built to support learning how to create AI chatbots. The platform allows hiring managers and job seekers to upload their CVs and ask questions to an AI chatbot for better understanding and evaluation.

          The problem it solves is making CV review easier and more interactive, while helping users quickly get important information from resumes.

          The project uses the Gemini API for the chatbot intelligence, FastAPI for the backend API, Next.js for the frontend application, and Figma for UI design.`}
          teck_stack={
            <>
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
              <img src="/icons/Fastapi.svg" alt="" />
              <img src="/icons/gemini.svg" alt="" />
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
          project_title="car trader (web development & machine learning)"
          project_Description={`Car Trader is a marketplace platform built for people in Rwanda to buy and sell cars. The project also includes a machine learning model that helps users evaluate car value by predicting car prices.

          The model predicts the price using key features such as car maker, transmission type, fuel type, mileage, and release year. This helps users make better and fair decisions when buying or selling cars.

          Through this project, I learned full-stack web development, basic DevOps practices, and improved my machine learning skills.

          The technologies used include Next.js for the frontend, Express.js for backend development, FastAPI for the model API, TensorFlow for machine learning modeling, MongoDB for the database, and Figma for UI design.`}
          teck_stack={
            <>
              <img src="/icons/expressjs.svg" alt="" />
              <img src="/icons/figma.svg" alt="" />
              <img src="/icons/mongodb.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
              <img src="/icons/Fastapi.svg" alt="" />
              <img src="/icons/tensorflow.svg" alt="" />
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
                href="https://www.car-trader.site/"
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
