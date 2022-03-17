import React from "react";
import style from "./ProfileContent.module.scss";
import {Routes} from "react-router-dom";

export const Works = () => {

    return (
        <>
            <h6 className={style.title}>
                Where I’ve Worked
            </h6>
            <div className={style.description}>
                <div className={style.inner}>
                    <div className={style.list}>
                        Works
                    </div>
                    <div className={style.schools}>
                        <Routes>
                            Works
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

