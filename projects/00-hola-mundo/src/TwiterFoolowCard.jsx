export function TwiterFoolowCard ({formatUserName,userName, isFololowing, children}) {
    const addAt = (userName) => `@${userName}`


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
              <button className='tw-followCard-button'>
                  Segir
              </button>
          </aside>
        </article>
      )
}