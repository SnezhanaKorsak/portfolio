import React from "react";

import style from "./About.module.scss";
import myPhoto from "../../../assets/images/my-photo.png";


export const About = () => {

    const birthDateToAge = () => {
        const n = +new Date()
        const b = +new Date(1990, 8, 28)
        return Math.floor((n - b) / (1000 * 60 * 60 * 24 * 30 * 12))
    }

    return (
        <>
            <div className={style.profileContent}>
                <div className={style.photo}>
                    <img src={myPhoto} alt="my-photo"/>
                </div>
                <div className={style.profileDescription}>
                    <h6 className={style.title}>
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
                    </div>

                    <div className={style.contentInfo}>
                        <div className={style.row}>
                            <div className={style.rowItem}>
                                <span>Name:</span>
                                <p>Snezhana Korsak</p>
                            </div>

                            <div className={style.rowItem}>
                                <span>Email:</span>
                                <p>snezhana_korsak@gmail.com</p>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.rowItem}>
                                <span>Age:</span>
                                <p>{birthDateToAge()}</p>
                            </div>

                            <div className={style.rowItem}>
                                <span>From:</span>
                                <p>Minsk, Belarus</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    );
};

