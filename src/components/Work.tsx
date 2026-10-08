import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      title: "3D Personal Portfolio",
      category: "Web Development",
      tools: "React, TypeScript, Three.js, CSS",
      image: "https://miro.medium.com/v2/resize:fit:1358/1*ffiCcx0izt2slC9hZE5qqw.jpeg",
    },
    {
      title: "Women Safety Website",
      category: "Web Development",
      tools: "HTML, CSS, JavaScript, PHP",
      image:
        "https://www.worksafetydirect.com.au/wp-content/uploads/2024/10/an-illustration-of-women-in-safety-870x563.jpeg",
    },
    {
      title: "Netflix Clone",
      category: "Web Development",
      tools: "HTML, CSS, JavaScript, React",
      image: "https://abellagraphicdesign.com/wp-content/uploads/2023/10/netflix-1-768x427.jpg",
    },
    {
      title: "Falling Fruit Game",
      category: "Game Development",
      tools: "JavaScript, HTML, CSS",
      image: "https://img.itch.zone/aW1hZ2UvMjEzMDY1NS8xMjU1NTUxNS5wbmc=/original/biP9SR.png",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>

                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;