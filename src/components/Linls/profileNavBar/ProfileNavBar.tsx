import React from "react";
import style from "./ProfileNavBar.module.scss";
import {NavLink} from "react-router-dom";


export const ProfileNavBar = () => {

    return (
        <div className={style.navigation}>
            <NavLink to={"/about/me"}>
                About
            </NavLink>
            <NavLink to={"/about/education/01-03.2022"}>
                Education
            </NavLink>
            <NavLink to={"/about/works/Internship"}>
                Works
            </NavLink>
        </div>
    );
};

