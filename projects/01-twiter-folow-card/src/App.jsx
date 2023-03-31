import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users =[
    {
     userName:'midudev',
     name: 'Migel Angel Duran',
     isFololowing: true
    },
    {
     userName:'pheralb',
     name: 'Pablo H.',
     isFololowing: false
    },
    {
     userName:'PacoHdezs',
     name: 'Paco Hernandez ',
     isFololowing: true
    },
    {
     userName:'TMChein',
     name: 'Tomas',
     isFololowing: false
    }
 ]

export function App () {

    return(
    <section className='App'>
        {
        users.map(({name, userName, isFololowing })=> {
            return (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFololowing}
                >
                {name}    
                </TwitterFollowCard>
            )
        })
    }
    </section>
    
    )
}