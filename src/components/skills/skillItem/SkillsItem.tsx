import React from "react";
import s from "./SkillsItem.module.scss";
import {SkillDataItem} from "../Skills";

type SkillsItemProps = {
    skill: SkillDataItem;
    style: {backgroundImage: string}
}

export const SkillsItem: React.FC<SkillsItemProps> = ({style, skill}) => {

    return (
        <div className={s.skillsItem}>
            <span className={s.itemArrow}/>
            <div className={s.skillName}>
                {skill.skillName}
            </div>
            <div className={s.skillIcon} >
                <span className={s.iconRotate} style={style}/>
            </div>
        </div>
    );
};

