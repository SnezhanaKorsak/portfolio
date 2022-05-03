import React from "react";
import style from "./Download.module.scss";


export const DownloadButtons = () => {

    return (
        <>
            <a href="https://drive.google.com/file/d/1iYm2dR-eyR3rbN8QJQVIl9pOrWyr1tdp/view?usp=sharing"
               className={style.btnFlip} data-back="➦" data-front="Download CV" target="_blank"/>
        </>
    );
};

