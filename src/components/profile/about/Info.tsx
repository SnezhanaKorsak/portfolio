import React from "react";
import style from "./ProfileContent.module.scss";
import {BackButtons} from "../../../common/buttons/back-buttons/BackButtons";
import {DownloadButtons} from "../../../common/buttons/download-buttons/DownloadButtons";


export const Info = () => {

    const birthDateToAge = () => {
        const n = +new Date()
        const b = +new Date(1990, 8, 28)
        return Math.floor((n - b) / (1000 * 60 * 60 * 24 * 30 * 12))
    }

    return (
        <div className={style.contentInfo}>
            <div className={style.sidebar}>
                <div className={style.rowItem}>
                    <span>Name:</span>
                    <p>Snezhana Korsak</p>
                </div>

                <div className={style.rowItem}>
                    <span>Email:</span>
                    <p>snezhana_korsak@gmail.com</p>
                </div>


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

            <DownloadButtons/>

        </div>
    );
};

