import React, {useState} from 'react'

export const Features = () => {

    const [value, setValue] = useState(0)
    const [name, setName] = useState('')
    const [hidden, setHidden] = useState(true)
    const add = () => setValue((prev) => prev +1)
    const del = () => setValue((prev) => prev -1)
    const toggle = () => setHidden((prev) => !prev)
    return (
        <div>
            Value: {value}
            <button onClick={add}>Add</button>
            <button onClick={del}>Delete</button>
            <p>Name: {name}</p>
            <input onChange={(e) => setName(e.target.value)}/>
            <div>
                <button onClick={toggle}>Toggle</button>
                {!hidden && <div>BlaBla</div>}
            </div>

        </div>
    )
}