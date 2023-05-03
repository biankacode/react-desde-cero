import { useState, useEffect } from 'react'
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
  /*   console.log('board', {board}) */
  /*  //primera pocicion el valor del estado, segunda posicion como se actusliza el estado */
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWiner] = useState(null)/* //null: ganador// false:empate */

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
    resetGameStorage()
  }
  /* esta function se va a encargar de actualiza y pasar estados */
  const updateBoard = (index) => {
    if (board[index] || winner) return //* No actualizamos esta posicion si ya tiene algo*/

    /* //actualizar el tablero */
    /*  console.log("Updateboard", {index}) */
    const newBord = [...board] // copia del array de forma superficial!
    newBord[index] = turn// el newBor que rsit ecibe el indice, con el valor de turn actual X, O
    /*  console.log('newBoard', {newBord}) */
    setBoard(newBord)
    /*  //Cambiar el turno */
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    /* console.log("Current Turn", {turn}, "newTurn", {newTurn}) */
    setTurn(newTurn)
    /* //Guardar la partida */
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
      setWiner(false)/*  //empate */
    }
  }

  useEffect(() => {
    console.log('UseEfect')
  }, [])

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>{
 /* //Se reenderiza con el .map por que devuelbe un array */
          board.map((_, index) => {
            return (
              <Square
                key={index} /* Identificador de cada elemento */
                index={index}
                updateBoard={updateBoard}/* //Se ejecuta cuando se haga click */
              >
                {board[index]} {/* Muestra el interior de los cuadros */}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>
      <WinerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
