import React, { useState } from 'react';

function Select() {
   const arOptions = ['чаем', 'кофе', 'молоком'];
   const [value, setValue] = useState('');

   const options = arOptions.map((text, index) => {
      return <option key={index}>{text}</option>;
   });

   return <div>
      <h2>С чем любишь кушать печеньки?</h2>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
         {options}
      </select>
      <p>
         Ты любишь кушать печеньки с {value} ~
      </p>
   </div>;
}

export default Select;