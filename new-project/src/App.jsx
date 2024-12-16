'use client'

import { useState } from 'react'
import './App.css'
export default function Home() {
  const [name, setName] = useState("Farid")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const changeName = () => {
    setName(name === "Farid" ? "Emin" : "Farid")
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <h1>SalamunAleykuma, {name}!</h1>
      {/* <button 
        onClick={changeName}
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        İsmi Değiştir
      </button> */}
      <button 
        onClick={toggleModal}
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Modalı Aç
      </button>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            color:'black',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h2>Salaaaaaaamm</h2>
            <p>Qutardin  {name}  ?</p>
            {/* <button
              onClick={changeName}
              style={{
                margin: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              İsmi Değiştir
            </button> */}
            <button 
              onClick={toggleModal}
              style={{
                borderColor:'black',
                backgroundColor :'white',
                color : 'black',
                margin: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Bagla
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

