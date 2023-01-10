import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, ErrorPage, SingleComicPage } from "../pages";

const App = ()  => {
    

        return (
            <Router>
                <div className="app">
                <AppHeader/>
                <main>
                <Routes>
                    <Route path="/MARVEL-REACT-PROJECT" element={<MainPage/>} />
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/comics" element={<ComicsPage/>} />
                    <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;