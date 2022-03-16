import React from 'react';
import {StartPage} from "./components/startPage/StartPage";
import "./App.scss"
import {Navigate, Route, Routes} from "react-router-dom";
import {RoutePath} from "./utils/route-path";
import {Navigation} from "./components/navigation/Navigation";
import {NotFoundPage} from "./components/notFoundPage/notFoundPage";


function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path={RoutePath.navigation} element={<Navigation/>}/>
                <Route path={RoutePath.notFound} element={<NotFoundPage/>}/>
                <Route path="*" element={<Navigate to={RoutePath.notFound}/>}/>
            </Routes>

        </div>
    );
}

export default App;
