import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

function Search() {
    const {  searchData, setSearchData } = useContext(UserContext);

    // Ensure searchData is a string 
 

    const handleSearch = (e) => {
        setSearchData(e.target.value)

    };
    // useEffect(()=>{
    //     console.log(searchData);
        
    // })

    return (
        <div className='flex justify-center h-40'>
            <div className='w-1/3 h-auto flex justify-center py-24'>
                <input
                    type="text"
                    // value={searchData || ''} // Ensure it's always a string
                    onChange={handleSearch}
                    placeholder='Search by name'
                    className='p-4 py-3 rounded-xl h-11'
                />
            </div>
            
        </div>
    );
}

export default Search;
