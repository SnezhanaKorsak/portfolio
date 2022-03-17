import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {RoutePath} from "../../../utils/route-path";
import style from "./BackButtons.module.scss";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

export const BackButtons = () => {

    return (
        <div className={style.icon}>
            <NavLink to={RoutePath.navigation}>
                <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
            </NavLink>
        </div>
    );
};

