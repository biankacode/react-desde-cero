import { useState } from 'react'
import './App.css'
/* import Suma from "./ejemplo"; */


const TURNS = {
  X: 'x',
  O: 'o'
}
// Este es el cuadrado del tablero,children: lo que tiene adentro el tablero
//updateBoard:cuando agamos clic se actualiza el tablero
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  console.log(className);

  const handelClick = () => {
    updateBoard(index)
  } 
  
  
 return (
  <div onClick={handelClick} className={className}>
    {children}
  </div>
 )
}

const WINER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

// Aqui se dibuja el tableroInstalar para borde
function App() {
  const [board ,setBoard] = useState(Array(9).fill(null))
  console.log('board', {board})
 //primera pocicion el valor del estado, segunda posicion como se actusliza el estado
  const [turn, setTurn] = useState (TURNS.X)

  const [winner, setWiner]= useState(null)//null: ganador// false:empate

  const checkWinner = (boardToCheck)=>{
    //Con esto revisamos todas las convinaciones ganadoras 
    //Para ver si gano X u O
    for (const combo of WINER_COMBOS){
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b]&&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //
    return null
  }

  const updateBoard = (index) => {// esta function se va a encargar de actualiza y pasar estados
    
    if (board[index] || winner) return //No actualizamos esta posicion si ya tiene algo
      
    //actualizar el tablero
    console.log("Updateboard", {index})
    const newBord = [...board] // copia del array de forma superficial!
    newBord[index] = turn// el newBor que recibe el indice, con el valor de turn actual X, O
    console.log('newBoard', {newBord})
    setBoard(newBord) 
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    console.log("Current Turn", {turn}, "newTurn", {newTurn})
    setTurn(newTurn)
    // Revisar si hay un ganador
    const newWinnwer = checkWinner(newBord)
    if (newWinnwer) {
      setWiner(()=>{
        return newWinnwer
     })
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        { //Se reenderiza con el .map por que devuelbe un array
          board.map((_, index)=>{
            return(
              <Square
                key={index} /* Identificador de cada elemento */
                index={index}
                updateBoard = {updateBoard}//Se ejecuta cuando se haga click
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
      {
        winner !== null && (
          <section className='winner' >
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Gano:'
                }
              </h2>
              <header className='win'>
                  winner && <Square>{winner}</Square>
              </header>
              <footer>
                <button>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
