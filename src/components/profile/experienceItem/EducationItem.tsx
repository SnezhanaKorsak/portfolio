import React from "react";
import {EducationDataItem} from "../about/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import style from "./Experience.module.scss";

type EducationItemProps = {
    item: EducationDataItem
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

