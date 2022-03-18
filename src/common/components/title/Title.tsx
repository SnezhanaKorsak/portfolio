import React from "react";
import style from "./Title.module.scss";


type TitleProps = {
    main: string
    secondary: string
}


export const Title: React.FC<TitleProps> = ({main, secondary}) => {

    return (
        <div className={style.container}>
            <h2 className={style.muted}>
                {main}
            </h2>
            <p className={style.textWhite}>
                {secondary}
            </p>
        </div>
    );
};

