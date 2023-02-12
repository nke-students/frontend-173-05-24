import React, {useState} from 'react';

const Inputt = function() {
    const [text, setText] = useState('')

    function changeText(event) {
        setText(event.target.value)
    }
    
    return (
        <div>
            <h2>От кого пожертвование:</h2>
            <input value={text} onChange={changeText}/>
            <p><span>Спасибо {text}</span></p>
        </div>
    )
};

export default Inputt;