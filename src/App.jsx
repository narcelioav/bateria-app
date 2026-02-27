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
import alerta from "./assets/alerta.mp3"

function App() {
  const [nivel, setNivel] = useState(100)
  const [limite] = useState(20)

  useEffect(() => {
    if (nivel <= limite && nivel > 0) {
      const audio = new Audio(alerta)
      audio.play()
    }
  }, [nivel, limite])

  return (
    <div>
      <h1>🔋 {nivel}%</h1>

      {nivel === 20 && <p>⚠️ Bateria baixa!</p>}

      <button
        /*onClick={() => {
          if (nivel > 0) {
            setNivel(nivel - 10)
          }
        }}*/
        onClick={() =>
          setNivel((valorAnterior) => {
            if (valorAnterior <= 0) return 0
            return valorAnterior - 10
          })
        }
          >
          Consumir bateria
      </button>
    </div >
  )
}

export default App

