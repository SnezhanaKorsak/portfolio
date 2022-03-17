import React from "react";
import {VerticalLinks} from "../Linls/verticalLinks/VerticalLinks";
import {MailLinks} from "../Linls/mailLinks/MailLinks";
import {NavLink} from "react-router-dom";
import {ParticlesBackground} from "../../common/components/ParticlesBackground";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import style from "./Navigation.module.scss";
import {RoutePath} from "../../utils/route-path";


export const Navigation = () => {

    return (
        <div className={style.navigationPage}>
            <ParticlesBackground/>
            <div className={style.circle3}>
                <div className={style.circle2}>
                    <NavLink to={RoutePath.projects} className={style.link}>Projects</NavLink>
                    <NavLink to={RoutePath.skills} className={style.link}>Skills</NavLink>
                    <NavLink to={RoutePath.contacts} className={style.link}>Contacts</NavLink>
                    <NavLink to={RoutePath.about} className={style.link}>About</NavLink>

                    <div className={style.dopCircle}>
                        <div className={style.circle1}>
                            <div className={style.circleCenter}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.icon}>
                <NavLink to={"/"}>
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                </NavLink>
            </div>

            <VerticalLinks/>
            <MailLinks/>

        </div>
    );
};

