import React from "react";

import style from "./Contacts.module.scss";
import {Title} from "../../common/components/title/Title";
import {BackButtons} from "../../common/buttons/back-buttons/BackButtons";
import {VerticalLinks} from "../Linls/verticalLinks/VerticalLinks";
import {MailLinks} from "../Linls/mailLinks/MailLinks";
import {ContactItem} from "./contactItem/ContactItem";
import {contactsData} from "../../utils/data";


export const Contacts = () => {

    const mappedContacts = contactsData.map(contact => <ContactItem key={contact.id} contact={contact}/>)

    return (
        <div className={style.contactsBlock}>
            <Title main={"contacts"} secondary={"Get in Touch"}/>

            <div className={style.btnBack}>
                <BackButtons/>
            </div>

            <div className={style.container}>
                <div className={style.contactsContainer}>
                    <div className={style.description}>
                        <h6 className={style.title}>
                            What’s Next?
                        </h6>
                        <p>
                            I am always open to discussing new projects,
                            creative ideas or opportunities to be part of your team.
                            Feel free to get in touch with me.
                        </p>
                        <p>
                            You can
                            <span className={style.ruWords}>
                            <span>call me</span>
                            <span>send me a message</span>
                            <span>write me an email</span>
                        </span>
                        </p>
                    </div>


                    <div className={style.contactsInfo}>
                        {mappedContacts}
                    </div>

                </div>

                <VerticalLinks/>
                <MailLinks/></div>
        </div>
    );
};

