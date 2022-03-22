import React from "react";
import {Title} from "../../common/components/title/Title";
import {ProjectItem} from "./projectItem/ProjectItem";
import {projectsData} from "../../utils/data";
import forecastImg from "../../assets/images/forecast.jpg"
import todoImg from "../../assets/images/todolist.jpg"
import surveyImg from "../../assets/images/survey.jpg"
import networkImg from "../../assets/images/network.jpg"
import style from "./Projects.module.scss";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";



export const Projects = () => {

    const images = [
        {backgroundImage: `url(${forecastImg})`},
        {backgroundImage: `url(${todoImg})`},
        {backgroundImage: `url(${surveyImg})`},
        {backgroundImage: `url(${networkImg})`},
    ]

    const mappedProjects = projectsData.map((project, index) =>
        <ProjectItem key={project.id} project={project} style={images[index]}
    />)

    return (
        <div className={style.projectsBlock}>
            <Title main={"projects"} secondary={"What I Do?"}/>
            <div className={style.btnBack}>
                <BackButtons/>
            </div>

            <div className={style.projectsContainer}>
                {mappedProjects}
            </div>
        </div>
    );
};

