import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";



const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/comicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/characterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePaige'));

const App = ()  => {
    

        return (
            <Router>
                <div className="app">
                <AppHeader/>
                <main>
                    <Suspense>
                        <Routes>
                            <Route path="/MARVEL-REACT-PROJECT" element={<MainPage/>} />
                            <Route path="/" element={<MainPage/>} />
                            <Route path="/comics" element={<ComicsPage/>} />
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType="character"/>} />
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </Suspense>
                    </main>
                </div>
            </Router>
        )
}

export default App;