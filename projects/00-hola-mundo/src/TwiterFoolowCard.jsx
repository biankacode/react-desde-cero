import { useState } from "react"


export function TwiterFoolowCard ({formatUserName,userName, children}) {
    const[isFololowing, setIsFollowing] = useState(false)

    const text = isFololowing ? 'Siguendo' : 'Seguir'
    const buttonClassName = isFololowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'  

    function handleState (){
        setIsFollowing(!isFololowing)
    }

    return(
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
              <img 
                 className='tw-followCard-avatar'
                 alt='El avatar del usuario'
                 src={`https://unavatar.io/${userName}`} />
                    
            
              <div className='tw-followCard-info'>
                  <strong>{children}</strong>
                  <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
              </div>
          </header>
          <aside>
              <button className={buttonClassName} onClick={handleState}>
                  {text}
              </button>
          </aside>
        </article>
      )
}