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
    name: "",
    titile: "",
    src: "/assets/preview.jpg",
  },
  {
    name: "",
    titile: "",
    src: "/assets/preview.png",
  },
  {
    name: "",
    titile: "",
    src: "/assets/preview -1.jpg",
  },
  {
    name: "",
    titile: "",
    src: "/assets/preview -2.jpg",
  },
  {
    name: "",
    titile: "",
    src: "/assets/preview -4.jpg",
  },
  {
    name: "",
    titile: "",
    src: "/assets/preview -3.jpg",
  },
];
const Projects = () => {
  return (
    <FullContiner>
      <BackgroundSky>
        <Container>
          <ProjectStyle>
            <div className="topHeaderText">
              <h3>Successful Some Projects</h3>
              <h1>
                Some of our <span>Works</span>
              </h1>
            </div>
            <div className="projectsBlock">
              {data.map((item, index) => {
                return (
                  <>
                    <div className="projectItem">
                      <div className="absolutItemText">
                        <div>
                          <h1>Bikrum Projects</h1>
                          <h4>
                            Weprosis Software Development Company Landing Page
                          </h4>
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
