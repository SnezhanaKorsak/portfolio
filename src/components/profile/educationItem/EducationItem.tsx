import React from "react";
import {DataItem} from "../about/data";
import style from "./EducationItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";


type EducationItemProps = {
    item: DataItem
}

export const EducationItem: React.FC<EducationItemProps> = ({item}) => {

    const descriptionItems = item.description.map(item => <li key={item + 1}>{item}</li>)

    return (
        <div className={style.educationContent}>
            <div className={style.title}>
                {item.school}
                <a href={item.socialLink} target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className={style.linkIcon}/>
                </a>
            </div>
            <div >
                {item.education}
            </div>
            <div className={style.description}>
                <ul>
                    {descriptionItems}
                </ul>
            </div>
        </div>
    );
};

