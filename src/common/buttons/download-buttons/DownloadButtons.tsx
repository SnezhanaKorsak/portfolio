import React from "react";
import style from "./Download.module.scss";


export const DownloadButtons = () => {

    return (
        <>
            <a href="https://drive.google.com/file/d/1Ss78dfqwx_PCViioqCiyaEqXViyPcMFj/view?usp=sharing"
               className={style.btnFlip} data-back="➦" data-front="Download CV" target="_blank"/>
        </>
    );
};

