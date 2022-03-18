import React from "react";
import {WorkDataItem} from "../about/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import style from "./Experience.module.scss";

type WorkItemProps = {
    item: WorkDataItem
}

export const WorkItem: React.FC<WorkItemProps> = ({item}) => {

    const descriptionItems = item.description.map(item => <li key={item + 1}>{item}</li>)

    return (
        <div className={style.educationContent}>
            <div className={style.title}>
                {`${item.specialization} @${item.company}`}
                <a href={item.socialLink} target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className={style.linkIcon}/>
                </a>
            </div>
            {/*<div >
                {item.}
            </div>*/}
            <div className={style.description}>
                <ul>
                    {descriptionItems}
                </ul>
            </div>
        </div>
    );
};

