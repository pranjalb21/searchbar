import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './searchBar.css';
import PersonBadge from '../personBadge/PersonBadge';
import { MdCancel } from 'react-icons/md'

function SearchBar({
  setSearchResults,
  input,
  setInput,
  seletedPersons,
  setSelectedPersons
}) {
  let txt = "Search";
  const handleChange = (e) => {
    setInput(e.target.value.trim());
    if(e.target.value.trim()===""){
      fetchResult(e.target.value)
    }
  }
  const fetchResult = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        const result = json.filter(item =>
          value &&
          item &&
          item.name &&
          item.name.toLowerCase().includes(value.toLowerCase()) &&
          !seletedPersons.includes(item.name)
        )
        setSearchResults(result);
      });
  }
  
  const handleClick = (per) => {
    const persons = seletedPersons.filter(p => p !== per);
    setSelectedPersons(persons)
  }
  return (
    <div className='input-wrapper'>
      {seletedPersons &&
        seletedPersons.map((person, id) => (
          <div className="personBadge" key={id}>
            <PersonBadge
              key={id}
              person={person}
            />
            <span>
              <sup>
                <MdCancel id='cancel' onClick={() => handleClick(person)} />
              </sup>
            </span>
          </div>
        ))}
      <FaSearch id='search-icon' />
      <input type='text' placeholder='Search...' id='txt'
        value={input}
        onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default SearchBar
