import { useState } from 'react'
import Header from './Components/Header/header'
import './App.css'
import { Average } from './Components/Average/average'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Average/>
    </>
  )
}

export default App
