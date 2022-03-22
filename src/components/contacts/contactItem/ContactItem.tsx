import React from "react";
import s from "./ContactItem.module.scss";
import {ContactDataItem} from "../../../utils/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faMarker} from "@fortawesome/free-solid-svg-icons/faMarker";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";


type ContactItemProps = {
    contact: ContactDataItem;
}

export const ContactItem: React.FC<ContactItemProps> = ({contact}) => {

    let firstValue, secondValue;

    if(contact.contactValue.includes("@") ) {
       let array = contact.contactValue.split("@")
        firstValue = `${array[0]}`;
        secondValue = `${array[1]}`;
    } else {
        firstValue = contact.contactValue;
        secondValue = ""
    }

    const icons = [faMarker, faMapMarkedAlt, faPhone, faLocationArrow]
    const currentIcon = icons[contact.id-1]

    return (
        <div className={s.contactItem}>
            <span className={s.infoIcon}>
                <FontAwesomeIcon icon={currentIcon} size="2x"/>
            </span>
            <div className={s.infoDetails}>
                <h6 className={s.infoType}>
                    {contact.contactType}
                </h6>
                <span className={s.infoValue}>
                    {firstValue}<br/>
                    {secondValue ? "@" + secondValue : ""}
                </span>
            </div>
        </div>
    );
};

