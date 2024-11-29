import { useState } from 'react'
import './App.css'
import Card from './components/main'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Card name={"Ferid"} surname={"Ferid"} age={19} />
     <Card name={"Emin"} surname={"emin"} age={31}/>
     <Card name={"Ibo"} surname={"Ibo"} age={23}/>
  
     <Footer/>
    </>
  )
}

export default App
