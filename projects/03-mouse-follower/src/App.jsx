import { useEffect, useState } from "react"

const FolowMuse = () =>{
  const [enabled, setEnabled] = useState(false)
  const [activar, setActivar] = useState(false)
  const [position, setPosition] = useState({x:0, y:0}) // aqui guardamos la posicion del puntero

  useEffect(() => {
    console.log('efecto',{enabled})

    const handleMove = (event) =>{ // la function recive el evento
      const {clientX, clientY} = event //plano carteciano del puntero
      console.log(handleMove, {clientX,clientY});//posicion exacta del puntero
      setPosition({x:clientX, y:clientY}) 
    }
    // Cleanup
    // Cuando el componente se desmonta 
    //Cundo cambian las dependencias antes de ejecutar

    if (enabled) { //solo activar si el anbled es true
      window.addEventListener('pointermove', handleMove)//cuando se mueva el puntero ejecutamos la fuccion handelMove
    }
    return()=>{ // este ayuda a limpìar el evento anteerior 
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])// activa y desactiva cuando segir el puntero

  return(
    <>
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
          transform: `translate(${position.x}px, ${position.y}px)`
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
   </>     
  )
}
 
function App() {
  return (
    <main>
      <FolowMuse/>
    </main>
  )
}

export default App
