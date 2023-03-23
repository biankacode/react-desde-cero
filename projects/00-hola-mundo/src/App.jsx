import React, { useState } from 'react'
import './App.css'
import { TwiterFoolowCard } from './TwiterFoolowCard'
import { Tittle } from './Tittle'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    const [name, setName]= useState('midudev')
    return(
    <section className='App'>
        <Tittle title={"Follow Card"}/>
        <TwiterFoolowCard formatUserName={formatUserName}   userName={name}>
        Minu Dev
        </TwiterFoolowCard>

        <TwiterFoolowCard formatUserName={formatUserName}  userName="pheralb">
        Pablo Hernandez
        </TwiterFoolowCard> 

        <TwiterFoolowCard formatUserName={formatUserName}  userName="elonmusk">
        Elon Musk
        </TwiterFoolowCard> 

        <TwiterFoolowCard formatUserName={formatUserName}  userName="vxnder">
        Vanderhart
        </TwiterFoolowCard> 
        
        <button onClick={()=> setName('pedromichel')}>
            Cambio el nombre
        </button>

    </section>
    
    )
}