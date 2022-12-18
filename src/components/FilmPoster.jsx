import React from 'react';
import Films from "./Films";


const FilmPoster = ({films, caption, remove }) => {
    return (
        <div className="poster">
            <h2 className="films__poster">
                {caption}
            </h2>
            {films.map((film, index)=>
                <Films remove={remove} number={index+1} film={film} key={film.id}/>
            )}
        </div>
    );
};

export default FilmPoster;