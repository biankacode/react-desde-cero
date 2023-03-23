import React from 'react'
import './App.css'
import { TwiterFoolowCard } from './TwiterFoolowCard'
import { Tittle } from './Tittle'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return(
    <section className='App'>
        <Tittle title={"Follow Card"}/>
        <TwiterFoolowCard formatUserName={formatUserName}  isFololowing userName="midudev">
        Minu Dev
        </TwiterFoolowCard>

        <TwiterFoolowCard formatUserName={formatUserName}  isFololowing= {false} userName="pheralb">
        Pablo Hernandez
        </TwiterFoolowCard> 

        <TwiterFoolowCard formatUserName={formatUserName}  isFololowing userName="elonmusk">
        Elon Musk
        </TwiterFoolowCard> 

        <TwiterFoolowCard formatUserName={formatUserName}  isFololowing userName="vxnder">
        Vanderhart
        </TwiterFoolowCard> 

    </section>
    
    )
}