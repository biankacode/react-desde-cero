/* // Este es el cuadrado del tablero,children: lo que tiene adentro el tablero
//updateBoard:cuando agamos clic se actualiza el tablero */
const Square = (children, isSelected, updateBoard, index) => {
  /* const className = `square ${isSelected ? 'is-selected' : ''}`
  console.log(className)
  const handelClick = () => {
    updateBoard(index)
  } */
  return (
    <div>
      {children}
    </div>
  )
}

export  {Square}
