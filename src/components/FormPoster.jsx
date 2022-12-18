import React, {useState} from 'react';

const FormPoster = ({tack}) => {

    const [film,setFilm]= useState({name:"", rating:"", description:""})


    const addFilm = (e)=> {
        e.preventDefault()
        const newFilm = {
            ...film, id: Date.now()
        }
        tack(newFilm)
        setFilm({name:"", rating:"", description:""})
    }

    return (
        <aside >
            <form>
                <input
                    value={film.name}
                    onChange={e => setFilm({...film, name: e.target.value})}
                    type="text" placeholder="Название фильма"/>
                <input
                    value={film.rating}
                    onChange={e => setFilm({...film, rating: e.target.value})}
                    type="text" placeholder="Рейтинг фильма"/>
                <input
                    value={film.description}
                    onChange={e => setFilm({...film, description: e.target.value})}
                    type="text" placeholder="Описание фильма"/>
                <button onClick={addFilm}>Добавить</button>
            </form>
        </aside>
    );
};

export default FormPoster;