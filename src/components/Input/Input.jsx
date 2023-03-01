import React from 'react'

const Input = ({ handleExtraer }) => {
    return (
        <div>
            <input type="text" id="inputTexto" />
            <button onClick={() => handleExtraer(document.getElementById('inputTexto').value)}>Extraer Valor</button>
        </div>
    )
}

export default Input