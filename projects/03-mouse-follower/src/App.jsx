import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [activar, setActivar] = useState(false)
  useEffect(() => {
    console.log('efecto',{enabled})
    const handleMove = (event) =>{ // la function recive el evento
      const {clientX, clientY} = event //plano carteciano del puntero
      console.log(handleMove, {clientX,clientY});//posicion exacta del puntero
    }
    window.addEventListener('pointermove', handleMove)//cuando se mueva el puntero ejecutamos la fuccion handelMove
  }, [enabled])// activa y desactiva cuando segir el puntero

 

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
      <button onClick={() => setEnabled(!enabled)}>
      {enabled? 'Desactivar' : 'Activar'} segir puntero 
      </button>
      <section>
        <button onClick={() => setActivar(!activar)}>
          {activar? 'Abrir': 'Cerrar'} 
        </button>
      </section>
     
    </main>
  )
}

export default App
