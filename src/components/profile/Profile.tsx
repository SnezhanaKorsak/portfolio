import React from "react";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";
import {Title} from "../../common/components/title/Title";
import style from "./Profile.module.scss";
import {ProfileContent} from "./about/ProfileContent";
import {Preloader} from "../../common/components/preloader/Preloader";


export const Profile = () => {

    return (
        <div className={style.profileBlock}>
            <Preloader show="down"/>
            <div className={style.container}>

                <Title main={"about me"} secondary={"Know Me More"}/>
                <ProfileContent/>
            </div>
            <div className={style.btnBack}>
                <BackButtons/>
            </div>
        </div>
    );
};

