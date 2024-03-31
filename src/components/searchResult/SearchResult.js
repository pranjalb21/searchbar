import React from 'react';
import './searchResult.css';
import SearchResultItem from '../searchItem/SearchResultItem';

function SearchResult({ searchResults, setSelectedPersons,setInput,
    setSearchResults,seletedPersons }) {
    return (
        <div className='result-list'>
            {searchResults.map((item, id) => (
                <SearchResultItem
                    key={id}
                    result={item}
                    searchResults={searchResults}
                    setSelectedPersons={setSelectedPersons}
                    setInput={setInput}
                    setSearchResults = {setSearchResults}
                    seletedPersons={seletedPersons}
                />
            ))}
        </div>
    )
}

export default SearchResult
