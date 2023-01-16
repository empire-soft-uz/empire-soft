import React, { useState } from "react";
import {
  BackgroundSky,
  Container,
  FullContiner,
} from "../../constants/content/Containers";
import { TechnoloStyle } from "../../styles/technologies";

const mobile = [
  {
    name: "React native",
    src: "/tools/react.svg",
  },
  {
    name: "Flutter",
    src: "/tools/flutter.svg",
  },
  {
    name: "Kotlin",
    src: "/tools/kotlin.svg",
  },
  {
    name: "Android",
    src: "/tools/android.svg",
  },
  {
    name: "Java",
    src: "/tools/java.svg",
  },
  {
    name: "Swift",
    src: "/tools/swift.svg",
  },
  {
    name: "Ionic",
    src: "/tools/ionc.svg",
  },
];
const frontend = [
  {
    name: "React",
    src: "/tools/react.svg",
  },
  {
    name: "JavaScript",
    src: "/tools/js.svg",
  },
  {
    name: "NextJs",
    src: "/tools/next.svg",
  },
  {
    name: "NuxtJs",
    src: "/tools/nuxt.svg",
  },
  {
    name: "TypeScript",
    src: "/tools/ts.svg",
  },
  {
    name: "GraphQl",
    src: "/tools/redux.svg",
  },
  {
    name: "Material UI",
    src: "/tools/miui.svg",
  },
];
const backend = [
  {
    name: "NodeJs",
    src: "/tools/node.svg",
  },
  {
    name: "MongoDB",
    src: "/tools/mongo.svg",
  },
  {
    name: "Python",
    src: "/tools/phyton.svg",
  },
  {
    name: "Php",
    src: "/tools/php.svg",
  },
  {
    name: "PostgresSQL",
    src: "/tools/posgres.svg",
  },
  {
    name: "Firebase",
    src: "/tools/firebase.svg",
  },
  {
    name: "Go",
    src: "/tools/go.svg",
  },
];
const devops = [
  {
    name: "GitHub",
    src: "/tools/git.svg",
  },
  {
    name: "GitLab",
    src: "/tools/gitlab.svg",
  },
  {
    name: "Git",
    src: "/tools/gitt.svg",
  },
  {
    name: "Postman",
    src: "/tools/postman.svg",
  },
  {
    name: "Docker",
    src: "/tools/docer.svg",
  },
  {
    name: "WebPack",
    src: "/tools/web.svg",
  },
  {
    name: "Bitbucket",
    src: "/tools/bit.svg",
  },
];
const uxui = [
  {
    name: "Figma",
    src: "/tools/figma.svg",
  },
  {
    name: "Adobe AI",
    src: "/tools/ai.svg",
  },
  {
    name: "Adobe XD",
    src: "/tools/xd.svg",
  },
  {
    name: "Adobe Ps",
    src: "/tools/ps.svg",
  },
  {
    name: "Sketch",
    src: "/tools/sketch.svg",
  },
  {
    name: "Adobe",
    src: "/tools/adobe.svg",
  },
  {
    name: "Invision",
    src: "/tools/in.svg",
  },
];

const Technologies = () => {
  const [tools, setTools] = useState(mobile);
  const clickItem = (e, index) => {
    const ulItem = document.querySelectorAll(".ul li");
    ulItem.forEach((item) => {
      item.classList.remove("active");
    });
    ulItem[index].classList.add("active");
    if (ulItem[index].innerHTML == "Mobile") {
      setTools(mobile);
    } else if (ulItem[index].innerHTML == "Frontend") {
      setTools(frontend);
    } else if (ulItem[index].innerHTML == "Backend") {
      setTools(backend);
    } else if (ulItem[index].innerHTML == "Devops") {
      setTools(devops);
    } else if (ulItem[index].innerHTML == "UX/UI") {
      setTools(uxui);
    }
  };

  return (
    <FullContiner>
      <BackgroundSky>
        <Container>
          <TechnoloStyle>
            <div className="technologies">
              <div className="topText" data-aos="fade-down">
                <h3>Our Technologies</h3>
                <h1>
                  <span>Technologies</span> We Work With{" "}
                </h1>
              </div>
              <div className="technoTools">
                <div className="headerTools" data-aos="fade-up">
                  <ul className="ul">
                    {["Mobile", "Frontend", "Backend", "Devops", "UX/UI"].map(
                      (item, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              onClick={(e) => clickItem(e, index)}
                              className={index == 0 && "active"}
                            >
                              {item}
                            </li>
                          </>
                        );
                      },
                    )}
                  </ul>
                </div>
                <div className="Tools">
                  {tools.map((item, index) => {
                    return (
                      <>
                        <div className="tool" key={index} data-aos="zoom-out">
                          <img src={item.src} />
                          <h2>{item.name}</h2>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </TechnoloStyle>
        </Container>
      </BackgroundSky>
    </FullContiner>
  );
};

export default Technologies;
