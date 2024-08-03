import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=> {
  const[name,setName]=useState(null);
  const[gender,setGender]=useState(null)
  const[age,setAge]=useState(null);
  const [data, setData] = useState([]);
  const[searchData,setSearchData]=useState(null)
  const [getData,setGetData]=useState(null)
  // useEffect(()=>{
  //   console.log(age,name,gender)
  // })
  return (
   <UserContext.Provider value={{name,gender,age,setAge,setGender,setName,data,setData,searchData,setSearchData,getData,setGetData}}>
   {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider