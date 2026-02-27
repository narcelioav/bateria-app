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

import { useState, useEffect, useRef } from "react"
import alerta20 from "./assets/alerta20.mp3"
import alerta10 from "./assets/alerta10.mp3"
import alerta5 from "./assets/alerta5.mp3"
import "./App.css"

function App() {
  const [nivel, setNivel] = useState(100)
  const [limite, setLimite] = useState(20)
  const audioRef = useRef(null)

  /*useEffect(() => {
    if (nivel <= limite && nivel > 0) {
      const audio = new Audio(alerta)
      audio.play()
    }
  }, [nivel, limite])*/

  {/*adiciona alertas sonoros*/ }
  /*useEffect(() => {
    if (nivel === 20) {
      new Audio(alerta20).play()
    }
    if (nivel === 10) {
      new Audio(alerta10).play()
    }
    if (nivel === 5) {
      new Audio(alerta5).play()
    }
  }, [nivel])*/

  useEffect(() => {
    // Se entrou na zona crítica
    if (nivel <= limite && nivel > 0) {
      if (!audioRef.current) {
        audioRef.current = new Audio(alerta20)
        audioRef.current.loop = true
        audioRef.current.play()
      }
    } else {
      // Se saiu da zona crítica, para o som
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current = null
      }
    }

    // Cleanup automático (boa prática)
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }

  }, [nivel, limite])

  return (
    /*<div style={{ textAlign: "center", marginTop: "50px" }}>*/
    /*<div className="container">*/
    <div className="phone">
      <div className="screen">

        <h1>🔋 {nivel}%</h1>

        {/*<div style={{
        width: "200px",
        border: "2px solid black",
        padding: "5px",
        margin: "0 auto"
      }}>*/}
        <div className="barra-externa">
          <div className="barra-interna"
            style={{
              height: "20px",
              width: `${nivel}%`,

              //Barra usando limite dinâmico
              //backgroundColor: nivel > 20 ? "green" : "red"

              /*backgroundColor:
                nivel > 20 ? "green" :
                  nivel > 10 ? "yellow" :
                    "red"*/

              backgroundColor:
                nivel > limite ? "green" :
                  nivel > limite / 2 ? "yellow" :
                    "red"

            }} />
        </div>

        {nivel === 20 && nivel > 0 && (<p>⚠️ Bateria baixa!</p>)}
        {nivel === 15 && nivel > 0 && (<p>⚠️ Bateria baixa!</p>)}

        { /*Botão descarregar bateria*/}
        <button
          /*onClick={() => {
            if (nivel > 0) {
              setNivel(nivel - 10)
            }
          }}*/

          /*onClick={() =>
            setNivel((valorAnterior) => {
              if (valorAnterior <= 0) return 0
              return valorAnterior - 5
            })*/

          onClick={() =>
            setNivel((v) => v <= 0 ? 0 : v - 5)
          }
        >
          Consumir bateria
        </button>

        { /*Carregar bateria*/}
        <button
          /*onClick={() =>
            setNivel((valorAnterior) => {
              if (valorAnterior >= 100) return 100
              return valorAnterior + 5
            })*/

          onClick={() =>
            setNivel((v) => v >= 100 ? 100 : v + 5)
          }
        >
          Carregar bateria
        </button>

        {/*Permitir mudar limite configurável*/}
        <br /><br />
        {/*<input
        type="number"
        value={limite}
        onChange={(e) => setLimite(Number(e.target.value))}
      />*/}

        <p>Limite de alerta: {limite}%</p>

        <input
          type="range"
          min="5"
          max="50"
          value={limite}
          onChange={(e) => setLimite(Number(e.target.value))}
        />
      </div >
    </div >
  )
}

export default App

