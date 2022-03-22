import React from "react";
import style from "./ProfileContent.module.scss";
import {educationData} from "../../../utils/data";
import {NavLink, Route, Routes} from "react-router-dom";
import {EducationItem} from "../experienceItem/EducationItem";


export const Education = () => {

    const links = [...educationData].reverse().map(item => {
        return <button key={item.id} className={style.listItem}>
            <NavLink key={item.id} to={`${item.date}`}
                     className={({ isActive }) => (isActive ? `${style.link} active` : "inactive") }>
                {item.date}
            </NavLink>
        </button>
    })


    const routes = educationData.map(item => <Route key={item.id} path={item.date}
                                           element={<EducationItem key={item.date} item={item}/>}/>
    )

    return (
        <>
            <h6 className={style.title}>
                Where I've Studied
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

