import React from 'react';


const Films = (props) => {
    return (
        <div className="films">

            <div className="films__content">
                <strong>{props.number}. {props.film.name}</strong>
                <div>
                    {props.film.rating}
                </div>
                <div>
                    {props.film.description}
                </div>
            </div>

            <div>
                    <button
                        className="films__button"
                    onClick={() => props.remove(props.film)}
                    >Удалить</button>
            </div>
     </div>



    );
};

export default Films;