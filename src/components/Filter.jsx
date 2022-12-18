import React from 'react';
import Sorting from "./ Sorting";

const Filter = ({filter, setFilter}) => {
    return (
        <div>
            <input className="filter"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value}) }
                type="text"
                placeholder="Поиск..."/>
            <Sorting
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                sample="Сортировка"
                options={[

                    {value: "name", name: "по имени"}
                ]}
            />
        </div>
    );
};

export default Filter;