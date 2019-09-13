import React from 'react'

// Export - like export default HelloWorld; - and import, such as import React from 'react' are part of the ES6 modules system.
export default function Pixel(props){
    return (

// React outputs any value found in the className attribute in JSX as the HTML class attribute. The name differs from “regular HTML” because class is a reserved word in JavaScript.

// Backticks aka “template literals” aka “template strings” aka “fancy strings” were introduced in the ES2015 specifications. MDN states “ Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called “template strings” in prior editions of the ES2015 specification”.

        <div className={`
            ${props.background} 
            pixel 
            ${props.currentColor?'current-color':''}
            `} 
            onClick={props.onClick}
            />
    )
} 