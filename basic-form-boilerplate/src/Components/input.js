import React from 'react'

const textInput = ({onChange, name, value}) => {
    return (
        <div className="inputWrapper">
            <input type="text" name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default textInput