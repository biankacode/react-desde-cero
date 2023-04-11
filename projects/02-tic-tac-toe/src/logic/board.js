import { WINER_COMBOS } from "../components/constans.js";
export const checkWinnerFrom = (boardToCheck)=>{
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