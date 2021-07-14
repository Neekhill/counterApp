import React from 'react'
function Button({ buttonName, handleClick, style }) {
    return (

        <button className={"btn " + style} onClick={handleClick}>{buttonName}</button>

    )
}

export default Button
