import React from 'react';
import {StartPage} from "./components/startPage/StartPage";
import "./App.scss"
import {Navigate, Route, Routes} from "react-router-dom";
import {RoutePath} from "./utils/route-path";
import {Navigation} from "./components/navigation/Navigation";
import {NotFoundPage} from "./components/404/NotFoundPage";
import {Profile} from "./components/profile/Profile";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Contacts";


function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path={RoutePath.navigation} element={<Navigation/>}/>

                <Route path={RoutePath.about + "/*"} element={<Profile/>}/>
                <Route path={RoutePath.skills} element={<Skills/>}/>
                <Route path={RoutePath.projects} element={<Projects/>}/>
                <Route path={RoutePath.contacts} element={<Contacts/>}/>

                <Route path={RoutePath.notFound} element={<NotFoundPage/>}/>
                <Route path="*" element={<Navigate to={RoutePath.notFound}/>}/>
            </Routes>

        </div>
    );
}

export default App;
