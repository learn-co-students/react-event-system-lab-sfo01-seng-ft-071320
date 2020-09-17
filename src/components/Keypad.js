// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {


    listenToKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.listenToKeyUp} type="password" />
        )
    }
}