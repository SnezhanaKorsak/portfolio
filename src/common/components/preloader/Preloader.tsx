import React from "react";
import style from "./Preloader.module.scss";


type PreloaderProps = {
    show: string
}

export const Preloader: React.FC<PreloaderProps> = ({show}) => {

    const finalClassName = show === "up" ? "preloaderUp" : "preloaderDown"

    return <>
        <div className={style[finalClassName]}/>
        <div className={style.overlayWrapper}/>
    </>
};

