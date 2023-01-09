import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage } from "../pages";

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
                </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;