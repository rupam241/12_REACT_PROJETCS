import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';

function Table() {
  const { data, setData,name, age, gender,setDataValue,searchData } = useContext(UserContext);
 
  const [editId,setEditId]=useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Update data when name, age, or gender changes
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    // Only add a new entry if name, age, and gender are not empty
    if (name && age && gender) {
      const newItem = {
        id: Date.now(),
        name,
        age,
        gender
      };
      setData(prevData => [...prevData, newItem]);
      

    }
  }, [name, age, gender]);

  

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <div className='flex justify-center w-auto h-auto'>
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
            {data.map(({ id, name, age, gender }) => (
              <tr key={id}>
                <td className='border p-2 max-w-xs text-pretty text-left text-lg'  contentEditable={editId==id}>{name}</td>
                <td className='border p-2 max-w-xs text-pretty text-left text-lg' contentEditable={editId==id} >{age}</td>
                <td className='border p-2 max-w-xs text-pretty text-left text-lg'  contentEditable={editId==id}>{gender}</td>
                <td className='border p-2 max-w-xs text-pretty text-left text-lg' >
                  <button className='mx-1 bg-pink-800 p-2' onClick={() => handleEdit(id)}>Edit</button>
                  <button className='mx-1 bg-red-800 p-2' onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;