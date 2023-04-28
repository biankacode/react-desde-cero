import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square.jsx'
import { TURNS } from './components/constans.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinerModal } from './components/WinerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

// Aqui se dibuja el tableroInstalar para borde
function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  console.log('board', { board })
  /* primera pocicion el valor del estado, segunda posicion como se actusliza el estado */
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWiner] = useState(null) /* null: ganador// false:empate */

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // esta function se va a encargar de actualiza y pasar estados

    if (board[index] || winner) return /* No actualizamos esta posicion si ya tiene algo */

    /* actualizar el tablero */
    console.log('Updateboard', { index })
    const newBord = [...board] // copia del array de forma superficial!
    newBord[index] = turn // el newBor que recibe el indice, con el valor de turn actual X, O
    console.log('newBoard', { newBord })
    setBoard(newBord)
    /*  Cambiar el turno */
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    console.log('Current Turn', { turn }, 'newTurn', { newTurn })
    setTurn(newTurn)
    /* Guardar la partida */
    saveGameToStorage({
      board: newBord,
      turn: newTurn
    })

    // Revisar si hay un ganador
    const newWinnwer = checkWinnerFrom(newBord)
    if (newWinnwer) {
      confetti()
      setWiner(newWinnwer)
    } else if (checkEndGame(newBord)) {
      setWiner(false) /* empate */
    }
  }

  return (
  <p>HOla</p>
  )
}

export default App
