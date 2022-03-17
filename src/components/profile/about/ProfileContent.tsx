import React from "react";
import {BackButtons} from "../../../common/buttons/back-buttons/BackButtons";
import {About} from "./About";
import {Route, Routes} from "react-router-dom";
import {RoutePath} from "../../../utils/route-path";
import {Education} from "./Education";
import {Works} from "./Works";
import {ProfileNavBar} from "../../Linls/profileNavBar/ProfileNavBar";
import style from "./ProfileContent.module.scss";
import myPhoto from "../../../assets/images/my-photo.png";


export const ProfileContent = () => {

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
                    <Routes>
                        <Route path={RoutePath.aboutMe} element={<About/>}/>
                        <Route path={RoutePath.education + "/*"} element={<Education/>}/>
                        <Route path={RoutePath.works} element={<Works/>}/>
                    </Routes>

                    <ProfileNavBar/>

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

                        <div className={style.btnBack}>
                            <BackButtons/>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

