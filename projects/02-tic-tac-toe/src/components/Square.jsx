// Este es el cuadrado del tablero,children: lo que tiene adentro el tablero
//updateBoard:cuando agamos clic se actualiza el tablero
export const Square = ({children, isSelected, updateBoard, index}) => {
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