import { useState } from 'react'
import Icon from './Icon'
import './App.css' 
import './app2.css'
import CreateList from './DataManupulation'
import NavLeft from './navleft'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <header data-bs-theme="dark" class="navbar"  >
    <NavLeft></NavLeft>
    <Icon></Icon>
    </header>
    <CreateList></CreateList> 
    </>
  )
}

export default App
