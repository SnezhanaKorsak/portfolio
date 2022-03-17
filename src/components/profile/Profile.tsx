import React from "react";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";
import {Title} from "../../common/components/title/Title";
import style from "./Profile.module.scss";
import {About} from "./about/About";


export const Profile = () => {

    return (
        <div className={style.profileBlock}>
            <div className={style.container}>
                <div className={style.btnBack}>
                    <BackButtons/>
                </div>
                <Title main={"about me"} secondary={"Know Me More"}/>
                <About/>
            </div>
        </div>
    );
};

