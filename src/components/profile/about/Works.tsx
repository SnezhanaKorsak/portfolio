import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {worksData} from "../../../utils/data";
import {WorkItem} from "../experienceItem/WorkItem";
import style from "./ProfileContent.module.scss";


const getLinkName = (specialization: string): string => {
    return  specialization.split(" ").length > 1
        ? specialization.split(" ")[1]
        : specialization
}

export const Works = () => {

    const links = [...worksData].reverse().map(item => {

        const linkName = getLinkName(item.specialization)
        console.log(linkName)

        return <button key={item.id} className={style.listItem}>
            <NavLink key={item.id} to={`${linkName}`}
                     className={({ isActive }) => (isActive ? `${style.link} active` : "inactive") }>
                {linkName}
            </NavLink>
        </button>
    })


    const routes = worksData.map(item => {
        const linkName = getLinkName(item.specialization)
        console.log("route", linkName)
        return <Route key={item.id} path={linkName} element={<WorkItem key={item.date} item={item}/>}/>
        }
    )

    return (
        <>
            <h6 className={style.title}>
                Where I’ve Worked
            </h6>
            <div className={style.description}>
                <div className={style.inner}>
                    <div className={style.list}>
                        {links}
                    </div>
                    <div className={style.schools}>
                        <Routes>
                            {routes}
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

