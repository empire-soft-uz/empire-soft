import React from "react";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";
import {
  BackgroundSky,
  Container,
  FullContiner,
} from "../../constants/content/Containers";
import { ProjectStyle } from "../../styles/projects";
const data = [
  {
    name: "Forb uz",
    title: "You are on the free online trading platform for business forb.uz.",
    src: "/assets/forb.jpg",
  },
  {
    name: "Primus Mall",
    title:
      "Primus Mall is not just an online store with limited features and brands.",
    src: "/assets/mall.jpg",
  },
  {
    name: "New Building",
    title:
      "The image of Tashkent is changing for the better every day, including thanks to new residential complexes",
    src: "/assets/build.png",
  },
  {
    name: "GOPARTS.AE",
    title: "GOPARTS.AE is an affordable online store",
    src: "/assets/goparts.png",
  },
  {
    name: "E-DOCS",
    title:
      "Software package for ensuring legally significant electronic document management 'E-DOCS'",
    src: "/assets/edocs.png",
  },
  {
    name: "Empire IT Academy",
    title:
      "Empire IT Academy is an IT academy training full-cycle IT specialists",
    src: "/assets/empire.png",
  },
];
const Projects = () => {
  return (
    <FullContiner>
      <BackgroundSky>
        <Container id="Products">
          <ProjectStyle>
            <div className="topHeaderText" data-aos="fade-down">
              <h3>Successful Some Projects</h3>
              <h1>
                Some of our <span>Works</span>
              </h1>
            </div>
            <div className="projectsBlock">
              <div className="absolutImg-2"></div>
              <div className="absolutImg-1">
                <img src="/assets/group.png" />
              </div>
              {data.map((item, index) => {
                return (
                  <>
                    <div className="projectItem" data-aos="zoom-in">
                      <div className="absolutItemText">
                        <div>
                          <h1>{item.name}</h1>
                          <h4>{item.title}</h4>
                          <Button
                            text="View Projects"
                            color={COLORS.COLOR_BLUE}
                            back={COLORS.BACKGOUND_WHITE}
                          />
                        </div>
                      </div>
                      <img src={item.src} />
                    </div>
                  </>
                );
              })}
            </div>
          </ProjectStyle>
        </Container>
      </BackgroundSky>
    </FullContiner>
  );
};

export default Projects;
