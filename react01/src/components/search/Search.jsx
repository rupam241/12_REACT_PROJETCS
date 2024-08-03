import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Search() {
    const { data, searchData, setSearchData } = useContext(UserContext);

    // Ensure searchData is a string and filter data
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes((searchData || '').toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchData(e.target.value || ''); // Ensure it's always a string
    };

    return (
        <div className='flex justify-center h-40'>
            <div className='w-1/3 h-auto flex justify-center py-24'>
                <input
                    type="text"
                    value={searchData || ''} // Ensure it's always a string
                    onChange={handleSearch}
                    placeholder='Search by name'
                    className='p-4 py-3 rounded-xl h-11'
                />
            </div>
            <div>{searchData}</div>
        </div>
    );
}

export default Search;
