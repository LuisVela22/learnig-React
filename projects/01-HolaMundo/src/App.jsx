import React from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

export function App () {
    return (
        <React.Fragment>
            <XFollowCard userName="midudev" name="Miguel Ángel" />
            <XFollowCard userName="eleenaamv" name="elenamrt" /> 
            <XFollowCard userName="Gyenis21" name="elenamrt" /> 
            <XFollowCard userName="jendralevis" name="elenamrt" />
        </React.Fragment>
    )
   
}