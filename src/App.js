import React from 'react'

import MainPage from './MainPage'
import { HeadProvider } from 'react-head';
import HeadOfTheMainPage from './HeadOfMainPage';
import { IconContext } from "react-icons";


const App = props => (
    <HeadProvider>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <HeadOfTheMainPage/>
            <MainPage/>
        </IconContext.Provider>
    </HeadProvider>
);

export default App;