import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('efecto')
  })
  return (
    <main>
     <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
      /*   transform: `translate(${position.x}px, ${position.y}px)` */
     }}
     />
      <button onClick={()=> setEnabled(!enabled)}>
      {enabled? 'Desactivar' : 'Activar'} segir puntero </button>
    </main>
  )
}

export default App
