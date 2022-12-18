import React from 'react';

const Sorting = ({options, sample, value, onChange}) => {
    return (
        <select
            className="sort"
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{sample}</option>
            {options.map(option =>
            <option key={option.value} value={option.value}>
            {option.name}
                </option>
                )}
        </select>
    );
};

export default Sorting;