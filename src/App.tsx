import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import DisplayTodos from './components/DisplayTodos'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <main>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <Navbar />
        <AddToDo />
        <DisplayTodos />
      </main>
    </>
  )
}

export default App
