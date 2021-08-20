import React from 'react'
import { FiSearch } from "react-icons/fi";
import '../../css/components/headnav.css'

const SearchBar = () => {
    return (
        <div className='searchBar'>
            <input className='sinput' placeholder="Search Anything" 
                
                //onChange={(e)=>setName(e.target.value)} 
                />
            
           <button className="buttonSearch" type="button"> <FiSearch/></button>
        </div>
    )
}

export default SearchBar;
