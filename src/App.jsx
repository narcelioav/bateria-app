/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*
function App() {
  return (
    <div>
      <h1>Projeto Alarme de Bateria 🔋</h1>
      <p>Primeiro passo no React.</p>
    </div>
  )
}

export default App
*/

import { useState, useEffect } from "react"
import alerta20 from "./assets/alerta20.mp3"
import alerta10 from "./assets/alerta10.mp3"
import alerta5 from "./assets/alerta5.mp3"

function App() {
  const [nivel, setNivel] = useState(100)
  const [limite, setLimite] = useState(20)

  /*useEffect(() => {
    if (nivel <= limite && nivel > 0) {
      const audio = new Audio(alerta)
      audio.play()
    }
  }, [nivel, limite])*/

  useEffect(() => {
    if (nivel === 20) {
      new Audio(alerta20).play()
    }
    if (nivel === 10) {
      new Audio(alerta10).play()
    }
    if (nivel === 5) {
      new Audio(alerta5).play()
    }
  }, [nivel])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>🔋 {nivel}%</h1>

      <div style={{
        width: "200px",
        border: "2px solid black",
        padding: "5px",
        margin: "0 auto"
      }}>
        <div style={{
          height: "20px",
          width: `${nivel}%`,
          //backgroundColor: nivel > 20 ? "green" : "red"
          backgroundColor:
            nivel > 20 ? "green" :
              nivel > 10 ? "yellow" :
                "red"
        }} />
      </div>

      {nivel === 20 && nivel > 0 && (<p>⚠️ Bateria baixa!</p>)}
      {nivel === 15 && nivel > 0 && (<p>⚠️ Bateria baixa!</p>)}

      <button
        /*onClick={() => {
          if (nivel > 0) {
            setNivel(nivel - 10)
          }
        }}*/
        onClick={() =>
          setNivel((valorAnterior) => {
            if (valorAnterior <= 0) return 0
            return valorAnterior - 5
          })
        }
      >
        Consumir bateria
      </button>

      { /*Carregar bateria*/}
      <button
        onClick={() =>
          setNivel((valorAnterior) => {
            if (valorAnterior >= 100) return 100
            return valorAnterior + 5
          })
        }
      >
        Carregar bateria
      </button>

      {/*Permitir mudar limite dinamicamente*/}
      <br /><br />
      <input
        type="number"
        value={limite}
        onChange={(e) => setLimite(Number(e.target.value))}
      />
    </div >
  )
}

export default App

