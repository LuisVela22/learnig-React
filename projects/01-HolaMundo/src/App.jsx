import React from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="midudev" 
                name="Miguel Ángel" 
                isFollowing //Esto es un true, con false no se puede hacer !isFollowing
            />
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="midudev" 
                name="elenamrt" 
                isFollowing={false} 
            /> 
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="midudev" 
                name="elenamrt" 
                isFollowing={true} 
            /> 
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="midudev" 
                name="elenamrt" 
                isFollowing={false} 
            />
        </section>
    )
}