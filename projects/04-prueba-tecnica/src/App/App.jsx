import{useState, useEffect} from 'react'
const CAT_ENPOINR_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENPOINT_IMG  = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`


export function App () {

    const [fact, setFact] = useState()

    useEffect(() => {
     fetch(CAT_ENPOINR_RANDOM_FACT)
          .then(resp=>resp.json())
          .then(data => setFact(data.fact))
    },[])
   return(
    <main>
         <h1>App de gatitos</h1>
         {fact && <p>{fact}</p>} {/* Renderizado condicional  */}
    </main>
  
   )
}

