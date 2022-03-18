import React from "react";
import {About} from "./About";
import {Route, Routes} from "react-router-dom";
import {RoutePath} from "../../../utils/route-path";
import {Education} from "./Education";
import {Works} from "./Works";
import {ProfileNavBar} from "../../Linls/profileNavBar/ProfileNavBar";
import style from "./ProfileContent.module.scss";
import myPhoto from "../../../assets/images/my-photo.png";
import {Info} from "./Info";


export const ProfileContent = () => {

    return (
        <>
            <div className={style.profileContent}>
                <div className={style.photo}>
                    <img src={myPhoto} alt="my-photo"/>
                </div>
                <div className={style.profileDescription}>
                    <Routes>
                        <Route path={RoutePath.aboutMe} element={<About/>}/>
                        <Route path={RoutePath.education + "/*"} element={<Education/>}/>
                        <Route path={RoutePath.works + "/*"} element={<Works/>}/>
                    </Routes>

                    <ProfileNavBar/>
                    <Info/>
                </div>
            </div>

        </>
    );
};

