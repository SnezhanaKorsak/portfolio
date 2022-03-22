import React, {useEffect, useState} from "react";
import {Title} from "../../common/components/title/Title";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";
import {SkillsItem} from "./skillItem/SkillsItem";
import style from "./Skills.module.scss";
import reactIcon from "../../assets/images/react.svg";
import reduxIcon from "../../assets/images/redux.svg";
import serverIcon from "../../assets/images/server.svg";
import typeScriptIcon from "../../assets/images/typescript.svg";
import javascriptIcon from "../../assets/images/javascript.svg";
import htmlIcon from "../../assets/images/html.svg";
import sassIcon from "../../assets/images/sass.svg";
import materialIcon from "../../assets/images/material.svg";
import githubIcon from "../../assets/images/github.svg";


export type SkillDataItem = {
    id: number;
    skillName: string;
    skillIcon: { backgroundImage: string }
}

const skillsData: SkillDataItem[] = [
    {
        id: 1,
        skillName: "React",
        skillIcon: {backgroundImage: `url(${reactIcon})`},
    },
    {
        id: 2,
        skillName: "Redux/Toolkit",
        skillIcon: {backgroundImage: `url(${reduxIcon})`},
    },
    {
        id: 3,
        skillName: "Axios/Rest API",
        skillIcon: {backgroundImage: `url(${serverIcon})`},
    },
    {
        id: 4,
        skillName: "TypeScript",
        skillIcon: {backgroundImage: `url(${typeScriptIcon})`},
    },
    {
        id: 5,
        skillName: "JavaScript",
        skillIcon: {backgroundImage: `url(${javascriptIcon})`},
    },
    {
        id: 6,
        skillName: "HTML/CSS",
        skillIcon: {backgroundImage: `url(${htmlIcon})`},
    },
    {
        id: 7,
        skillName: "SASS",
        skillIcon: {backgroundImage: `url(${sassIcon})`},
    },
    {
        id: 8,
        skillName: "Material UI",
        skillIcon: {backgroundImage: `url(${materialIcon})`},
    },
    {
        id: 9,
        skillName: "Git/GitHub",
        skillIcon: {backgroundImage: `url(${githubIcon})`},
    },
]

export const Skills = () => {

    let [counter, setCounter] = useState<number>(1277)
    const [maxValue, setMaxValue] = useState<number>(1477)


    useEffect(() => {
        const startDay = new Date(2022, 2, 21).getTime()
        const nextDay = Date.now()

        const daysCount = Math.round((nextDay - startDay) / 86400000)

        if (daysCount > 1) {
            setMaxValue(maxValue + Math.round(daysCount * 5))
        }

    }, [])

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(state => {
                if (state <= maxValue) {
                    return state + 1
                }

                return state
            })
        }, 20)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const mappedSkills = skillsData.map(skill => <SkillsItem key={skill.id} skill={skill} style={skill.skillIcon}/>)

    return (
        <div className={style.skillsBlock}>
            <Title main={"my skills"} secondary={"What I Know"}/>

            <div className={style.btnBack}>
                <BackButtons/>
            </div>

            <div className={style.skillsContainer}>

                <div className={style.skillsDescription}>
                    <div className={style.text}>
                        <h6 className={`${style.title} ${style.long}`}>
                            My level of knowledge in some tools
                        </h6>
                        <p>I like to set new goals and achieve them, open new doors and get to know the world.</p>
                        <p>For me, every new day is a great opportunity to change myself and my life, it's an occasion
                            to become the best version of myself.</p>
                        <p>Here is a small part of the skills that I own. But I am working hard to improve them and
                            replenish the collection</p>
                    </div>

                    <div className={style.hoursCounter}>
                        <p><span>{counter}</span>+</p>
                        <span className={style.label}>coding hours</span>
                    </div>
                </div>

                <div className={style.skillsList}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    );
};

