import React from 'react'
import Input from './components/Input'
import UserContext from './components/context/UserContext'
import UserContextProvider from './components/context/UserContextProvider'
import Search from './components/search/Search'
import Table from './components/table/Table'

function App() {
  return (
    <UserContextProvider>
    <div className='w-full h-lvh bg-slate-900 '>
      <Input/>
      <Search/>
      <Table/>
    </div>
    </UserContextProvider>
  )
}

export default App