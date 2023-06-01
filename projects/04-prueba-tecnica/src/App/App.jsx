import{useState, useEffect} from 'react'

export function App () {
    const [fact, setFact] = useState('Lorep ipsum cat what for ever')

    useEffect(() => {

    },[])
   return(
    <main>
         <h1>App de gatitos</h1>
         <p>{fact}</p>
    </main>
   
   )
}

