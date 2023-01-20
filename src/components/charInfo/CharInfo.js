import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../erorrMessage/ErorrMessage';
import Skeleton from '../skeleton/Skeleton';
import useMarvelService from '../../services/MarvelService';
import './charInfo.scss';



const CharInfo = (props) => {
    
    const [char, setChar] = useState(null);
    
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]) 
    
    const updateChar = () => {
        clearError();
        const {charId} = props;
        if(!charId){
            return;
        }
        getCharacter(charId)
                    .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }


    
        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <ViewBlock char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
}

const ViewBlock = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    
    

    let imgStyle = {'objectFit' : 'cover'};
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
    return (
        <>
        <div className="char__basics">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">Homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length > 0 ? null : 'Sorry, no information'}
                    {
                        comics.map((item, i) => {
                            if(i > 9) return; 
                            return (
                                <li key={i} className="char__comics-item">
                                    <Link to={`/comics/${item.resourceURI.slice(43)}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
        </>
    )
}

export default CharInfo;