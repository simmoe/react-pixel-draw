import React from 'react'
import Pixel from './Pixel'
import Colors from './Colors'

const m =
//Create a first row of 30 spaces
Array(30).fill()
// For each of them, fill them with an a new array of 30 spaces, filled with the
// value 0 the map function calls a defined callback function on each element of
// an array and returns an array that contains the defined value
    .map(function () {
        return Array(30).fill(0)
    })

export default class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matrix: m
        }
    }

    // Arrow functions – also called “fat arrow” functions, from CoffeeScript (a
    // transcompiled language) — are a more concise syntax for writing function
    // expressions. They utilize a new token, =>, that looks like a fat arrow. Arrow
    // functions are anonymous and change the way [this] binds in functions.
    //https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

    // We clone the matrix nested array, by using this kind of strange way: JSON.parse(JSON.stringify(my_array)) so that we don’t go and change the previous array, but we create a new one. Why we do so? For immutability reasons. We can’t change the matrix implicitly by editing its current value, but we want it to only change through our setMatrix() call.

    render() {
        const changeColor = (rowIndex, colIndex) => {
            const newMatrix = JSON.parse(JSON.stringify(this.state.matrix))
            newMatrix[rowIndex][colIndex] = this.props.currentColor
            this.setState({matrix:newMatrix})
        }
        return (
            <div className='canvas'>
                {this.state.matrix
                    //løb igennem rows
                    .map((row, rowIndex) => {
                        //og columns (bemærk vi bruger ikke selve col deraf _)
                        return row.map((_, colIndex) => {
                            //og returner en Pixel komponent med værdien fra matrix[row][column]
                            return (<Pixel
                                key={`${rowIndex}-${colIndex}`}
                                background={Colors[this.state.matrix[rowIndex][colIndex]]}
                                onClick = { (e) => changeColor(rowIndex, colIndex)}    
                                />)
                        })
                    })
}
            </div>
        )
    }
}
