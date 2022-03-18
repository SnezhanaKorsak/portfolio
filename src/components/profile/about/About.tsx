import React from "react";
import style from "./ProfileContent.module.scss";


export const About = () => {

    return (
        <>
            <h6 className={`${style.title} ${style.long}`}>
                I'm Snezhana Korsak, a Fronted Developer
            </h6>
            <div className={style.description}>
                <p>
                    I choose frontend because I like to visually see the result of my work.
                    But in the future, I want to learn backend and become a full stack developer.
                </p>
                <p>
                    My free time is dedicated to boosting my English. It is important for me to constantly
                    learn and develop, and I would like to work in a company with a modern approach to
                    development and a good team.
                </p>
                <p>
                    I would like to find a project job and a team in which I can improve my professional level.<br/>
                    I am ready to consider your offer!
                </p>
            </div>
        </>
    );
};

