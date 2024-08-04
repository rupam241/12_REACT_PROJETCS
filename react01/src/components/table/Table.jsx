import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';

function Table() {
  const { data, setData, name, age, gender, setName, setAge, setGender } = useContext(UserContext);
  const [editId, setEditId] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [searchData, setSearchData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data based on search term
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (name && age && gender) {
      const newItem = {
        id: Date.now(),
        name,
        age,
        gender
      };
      setData(prevData => [...prevData, newItem]);
      setName('');
      setAge('');
      setGender('');
    }
  }, [name, age, gender, setData, setName, setAge, setGender, isFirstRender]);

  const handleEdit = (id) => {
    setEditId(id);
    setTimeout(() => {
      alert("You can now edit");
    }, 100);
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='flex justify-center my-10'>
        <div className='bg-slate-50 w-96 h-12 rounded-xl'>
          <input 
            type="text" 
            placeholder='Search by name'  
            className='p-3 rounded-xl w-full h-full'
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)} 
          />
        </div>
      </div>
      <div className='flex justify-center w-auto h-auto my-10'>
        <div className='text-slate-50'>
          <table>
            <thead>
              <tr>
                <th className='border p-2 max-w-xs text-pretty text-left bg-green-800'>Name</th>
                <th className='border p-2 max-w-xs text-pretty text-left bg-green-800'>Age</th>
                <th className='border p-2 max-w-xs text-pretty text-left bg-green-800'>Gender</th>
                <th className='border p-2 max-w-xs text-pretty text-center bg-green-800'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(({ id, name, age, gender }) => (
                <tr key={id}>
                  <td className='border p-2 max-w-xs text-pretty text-left text-lg' contentEditable={editId === id}>{name}</td>
                  <td className='border p-2 max-w-xs text-pretty text-left text-lg' contentEditable={editId === id}>{age}</td>
                  <td className='border p-2 max-w-xs text-pretty text-left text-lg' contentEditable={editId === id}>{gender}</td>
                  <td className='border p-2 max-w-xs text-pretty text-left text-lg'>
                    <button className='mx-1 bg-pink-800 p-2' onClick={() => handleEdit(id)}>Edit</button>
                    <button className='mx-1 bg-red-800 p-2' onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex bg-slate-50 rounded-xl p-2'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 p-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Table;
