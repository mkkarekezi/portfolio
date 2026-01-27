import "./project-component.css";
import Link from "next/link";
import Image from "next/image";
export function ProjectComponent({
  project_title,
  imageSrc,
  titleOne,
  titleTwo,
  project_Description,
  project_speciality_one,
  project_speciality_two,
  teck_stack,
  template_logo,
  source_link,
  project_link,
}) {
  return (
    <div className="project">
      <div
        className="project-template-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`,
        }}
      >
        {template_logo && (
          <Image
            src={template_logo}
            width={114}
            height={114}
            alt="project logo"
            className="project-template-hero-logo"
          />
        )}
        <p className="project-template-hero-p">{titleOne}</p>
        <p className="project-template-hero-p">{titleTwo}</p>
      </div>

      <p className="project-title">
        {project_title} (* {project_speciality_one} & * {project_speciality_two}
        )
      </p>

      <div className="project-description">
        <p className="project-description-par">{project_Description}</p>
        <div className="project-description-stack">{teck_stack}</div>
      </div>

      {/*  */}
      <div className="project-links">
        <Link href={source_link} className="project-links-link">
          source code
          <img src="/icons/arrow-up-right.svg" alt="" />
        </Link>
        <Link href={project_link} className="project-links-link">
          live project
          <img src="/icons/arrow-up-right.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
