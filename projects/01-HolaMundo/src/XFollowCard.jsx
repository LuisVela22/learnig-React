import React from "react"

export function XFollowCard ({formatUserName, userName, name, isFollowing}) {
    // const addAt = (userName) => `@${userName}`
    console.log(isFollowing);
    return (
        <article className='tw-followCard' >
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${userName}`} alt='' />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
            <br />
            <br />
        </article>
    )
}