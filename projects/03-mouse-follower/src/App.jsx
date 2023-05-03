import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('efecto')
  })
  return (
    <>
      <h3>Proyecto 3</h3>
      <button onClick={()=> setEnabled(!enabled)}>
      {enabled? 'Desactivar' : 'Activar'} segir puntero </button>
    </>
  )
}

export default App
