import React, { useState } from 'react'
import { Square } from './square'

export const Parent = () => {
    const [length, setLength] = useState(1);
    const [obj, setObj] = useState([{name:"square"}])
    let append = () => {
        setLength(length+1)
        setObj([...obj,{name:"square"} ])
    }

    return (
        <React.Fragment>
            <button onClick={() => { append() }}>Click me</button>
            {obj.map((l) => {
                return (
                    <Square />
                )
            })}
        </React.Fragment>
    )
}
