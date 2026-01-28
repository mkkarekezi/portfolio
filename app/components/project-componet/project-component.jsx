import "./project-component.css";
import Link from "next/link";
import Image from "next/image";
export function ProjectComponent({
  project_title,
  imageSrc,
  title,
  project_Description,
  project_links,
  teck_stack,
  template_logo,
}) {
  return (
    <div className="project">
      <div
        className="project-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${imageSrc})`,
        }}
      >
        {template_logo && (
          <img
            src={template_logo}
            alt="project logo"
            className="project-hero-logo"
          />
        )}
        <p className="project-hero-p">{title}</p>
      </div>

      <p className="project-title">{project_title}</p>

      <div className="project-description">
        <p
          className="project-description-par"
          style={{ whiteSpace: "pre-line" }}
        >
          {project_Description}
        </p>
        <div className="project-description-stack">{teck_stack}</div>
      </div>

      {/*  */}
      <div className="project-links">{project_links}</div>
    </div>
  );
}
