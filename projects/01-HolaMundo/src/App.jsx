import React, { useState } from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    const [name, setName] = useState('Lua Vela');
    console.log('render with name: ', name);
    return (
        <section className='App'>
            <XFollowCard formatUserName={formatUserName} initialIsFollowing /*Esto es un true, con false no se puede hacer !isFollowing*/>  
                Miguel Angel
            </XFollowCard>

            <XFollowCard formatUserName={formatUserName} userName={name}  initialIsFollowing={false}>
                Luis Velasco
            </XFollowCard> 

            <XFollowCard formatUserName={formatUserName} userName="midudev"  initialIisFollowing={false}>
                Angel Velasco 
            </XFollowCard>

            {/* <button onClick={() =>{
                setName('Luan Vela');
            }}>Cambiar Nombre</button> */}
        </section>
    )
}