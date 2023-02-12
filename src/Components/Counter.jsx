import React, {useState} from 'react';

const Counter = function() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Благотворительный фонд печенюшек</h1>
            <h2>{count}</h2>
            <button onClick={increase}>Добавить печенюшку</button>
            <button onClick={decrease}>Отобрать печенюшку</button>
        </div>
    )
}

export default Counter;