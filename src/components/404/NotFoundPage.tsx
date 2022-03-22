import React from "react";
import style from "./NotFoundPage.module.scss";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";
import {Preloader} from "../../common/components/preloader/Preloader";


export const NotFoundPage = () => {

    return (
        <div className={style.container}>
            <Preloader show="down"/>
            <div className={style.line}/>

            <div className={style.text404}>
                404
                <div className={style.title}>
                    Page not found
                </div>
                <div className={style.description}>
                    The link you clicked may be broken<br/>
                    or the page
                    may have been removed
                </div>
            </div>

            <div className={style.textScanned}>

            </div>

            <div className={style.btnBack}>
                <BackButtons/>
            </div>
        </div>
    );
};

