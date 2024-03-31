import React from 'react';
import './searchResultItem.css';

function SearchResultItem({ 
    result, 
    id, 
    setSelectedPersons, 
    setInput,
    setSearchResults,
    seletedPersons 
}) {
    const handleSelect = (result) => {
        const persons = [...seletedPersons,result.name]
        setSelectedPersons(persons);
        setInput("")        
        setSearchResults([]);
    }
    return (
        <div key={id} className='searchResultItem' onClick={() => handleSelect(result)}>
            {result.name}
        </div>
    )
}

export default SearchResultItem
