//Component returns the colors in the Colors.js component
//It also receives a currentColor from parent App. 
//This value is used to send a prop on to the Pixel comp, that is either true or false 
//onClick the respective pixel will pass the click back on through this component, and finally 
//to Apps setColor function

import React from 'react'
import Pixel from './Pixel'
import Colors from './Colors'

export default(props) => {
    return (
        <div className="color-picker">
            {
                Colors.map((color, index) => {
                return <Pixel 
                    key = {index} 
                    background = {color}
                    currentColor = {Colors[props.currentColor] === color}
                    onClick = { e => props.setColor(index) }
                    />
            })}
        </div>
    )
}