import React from 'react'

const Hello = () => {
//    JSX version
//    return(
//        <div>
//            <h1>Hello Emmanuel</h1>
//        </div>
//    )
//    JS version
    return React.createElement('div', {id: 'Hello'}, React.createElement('h1', null, 'Hello Emmanuel'))
}

export default Hello

//! Conclusion JSX Approach is better!