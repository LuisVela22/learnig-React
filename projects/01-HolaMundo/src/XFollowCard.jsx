import React from "react"
import { useState } from "react";

export function XFollowCard ({formatUserName, userName =  'undefined', children, initialIsFollowing}) {
    // const addAt = (userName) => `@${userName}`
    //console.log('[XFollowCard] render with Username', userName);
    
    //RECORDAR QUE LAS PROPOS SON INMUTABLES, ES DECIR, NO PODEMOS ALTERAR SU CONTENIDO, ES MEJOR
    //CREAR UNA VARIABLE QUE ALMACENE ALGUNA MODIFICACION DEL CONTENIDO, PERO NUNCA MODIFICARLA COMO TAL


    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [hover, setHover] = useState(false);

    const text = isFollowing ? (hover ? "Dejar de seguir" : "Siguiendo") : "Seguir";
    const buttonClassName = isFollowing ? 'tw-Stopfollow-button' : 'tw-followCard-button';
    
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    const handleClick = () => setIsFollowing(!isFollowing);
    return (
        <article className='tw-followCard' >
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${userName}`} alt='' />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} 
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}        
                >
                    <span className="tw-followCard-text">{text}</span>
                </button>
            </aside>
            <br />
            <br />
        </article>
    )
}