import "../css/project-template.css";
import Link from "next/link";
import Image from "next/image";
export default function ProjectTemplate({
  imageSrc,
  titleOne,
  titleTwo,
  project_Description_one,
  project_Description_two,
  project_speciality_one,
  project_speciality_two,
  teck_stack,
  template_logo,
}) {
  return (
    <div className="project-template">
      {/*  */}
      <div
        className="project-template-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`,
        }}
      >
        {template_logo && (
          <Image
            src={template_logo}
            width={116}
            height={116}
            alt="project logo"
            className="project-template-hero-logo"
          />
        )}
        <p className="project-template-hero-p">{titleOne}</p>
        <p className="project-template-hero-p">{titleTwo}</p>
      </div>

      {/*  */}
      <div className="project-template-problem">
        {/*  */}
        <p className="project-template-problem-title">problem statement</p>
        <div className="project-template-problem-wrapper">
          <p className="project-template-problem-wrapper-par">
            {project_Description_one}
          </p>
          <p className="project-template-problem-wrapper-par">
            {project_Description_two}
          </p>
        </div>
      </div>

      {/*  */}
      <div className="project-template-speciality">
        <p className="project-template-speciality-title">speciality</p>
        <div className="project-template-speciality-wrapper">
          <p className="project-template-speciality-wrapper-par">
            {project_speciality_one}
          </p>
          <p className="project-template-speciality-wrapper-par">
            {project_speciality_two}
          </p>
        </div>
      </div>

      {/*  */}
      <div className="project-template-stack">
        <p className="project-template-stack-title">tech stack</p>
        <div className="project-template-speciality-par">{teck_stack}</div>
      </div>
      {/*  */}

      {/*  */}
      <div className="project-template-links">
        <p className="project-template-links-title">source code</p>
        <div className="project-template-links-wrapper">
          <Link href="#" className="project-template-links-wrapper-link">
            source code
            <img src="/icons/arrow-up-right.svg" alt="" />
          </Link>
          <Link href="#" className="project-template-links-wrapper-link">
            source code
            <img src="/icons/arrow-up-right.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
