import React from 'react'
import AddForm from './components/AddForm'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import NodeList from './components/NodeList'
import "./App.css"
const App = () => {
  return (
    <div className='notes-app'>
      <Header/>
      <SearchForm/>
      <AddForm/>
      <NodeList/>
    </div>
  )
}

export default App