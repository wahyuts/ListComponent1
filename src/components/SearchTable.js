import React from 'react'
import '../css/components/headnav.css'

const SearchTable = ({searching}) => {
    return (
        <div className='searchBar'>
            <input className='sinputProduct' placeholder="Search Anything" onChange={searching}
                
                //onChange={(e)=>setName(e.target.value)} 
                />
        </div>
    )
}

export default SearchTable;