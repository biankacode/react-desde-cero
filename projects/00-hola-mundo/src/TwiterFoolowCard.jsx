import { useState } from "react"

export function TwiterFoolowCard ({formatUserName,userName, children, initialIsFlolowing}) {
    const[isFololowing, setIsFollowing] = useState(initialIsFlolowing)

    console.log('[TwiterFoolowCard]render with name:', userName)

    const text = isFololowing ? 'Siguendo' : 'Seguir'
    const buttonClassName = isFololowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'  

    const handleState = ()=> {
     setIsFollowing(!isFololowing) //hocs. de true a fals a true
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
                  {/* <span className="tw-followCard-text">Seguir </span> */}
                  <span className="tw-followCard-text">{text}</span>  
                  <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
      )
}