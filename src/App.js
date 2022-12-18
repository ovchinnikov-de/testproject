import React, {useMemo, useState} from "react";
import './App.css';
import Header from "./components/Header";
import FilmPoster from "./components/FilmPoster";
import FormPoster from "./components/FormPoster";
import Filter from "./components/Filter";





function App() {

    const [films, setFilms] = useState([
        {id:1, name:"Титаник", rating:9, description:"Описание о титанике"},
        {id:2, name:"Звёздные войны", rating:9.5, description:"Описание о звёздных войнах"},
        {id:3, name:"Хоббит", rating:8.7, description:"Описание о хоббите"}
    ])

   const [filter, setFilter] = useState({sort: "",query:""})



    const chooseFilm = useMemo(() => {
        if (filter.sort) {
            [...films].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return films;
    }, [filter.sort,films])

    const sortedSearch = useMemo(() => {
        return chooseFilm.filter(film => film.name.toLowerCase().includes(filter.query))
    },[filter.query, chooseFilm])


    const takeFilm = (newFilm) => {
        setFilms([...films, newFilm])
    }


    const removeFilm = (film) => {
        setFilms(films.filter(f => f.id !== film.id))
    }

    const sortFilm = (sort) => {
        setFilms(sort);


    }


    return (

        <div className="App">
            <Header/>
            <Filter
            filter={filter}
            setFilter={setFilter}
            />
            {sortedSearch.length !== 0
                ? <FilmPoster remove={removeFilm} films={sortedSearch} caption="Жанр триллер"/>
                :  <h2 style={{textAlign: "center", padding: 10}}>Такого фильма не существует</h2>
            }
            <FormPoster tack={takeFilm}/>

        </div>

    );
}

export default App;

