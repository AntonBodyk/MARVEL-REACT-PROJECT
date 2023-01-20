import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundery/ErrorBoundery";
import CharSearchForm from "../charSearchForm/CharSearchForm";

import decoration from '../../resources/img/vision.png';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    
    const onCharSelected = (id) => {
        setChar(id);
    }

    return(
        <>
            <ErrorBoundery>
                <RandomChar/>
            </ErrorBoundery>
                <div className="char__content">
                    <ErrorBoundery>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundery>
                    <div>
                        <ErrorBoundery>
                            <CharInfo charId={selectedChar} />
                        </ErrorBoundery>
                        <ErrorBoundery>
                            <CharSearchForm/>
                        </ErrorBoundery>
                    </div>
                </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;