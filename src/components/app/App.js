import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, SingleComicPage } from "../pages";


const ErrorPage = lazy(() => import('../pages/ErrorPage'));

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
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </Suspense>
                    </main>
                </div>
            </Router>
        )
}

export default App;