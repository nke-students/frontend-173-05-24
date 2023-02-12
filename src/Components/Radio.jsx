import React, { useState } from 'react';

function Radio() {
   const [value, setValue] = useState(1);
   
   function chengeValue(event) {
      setValue(event.target.value);
   }

   return <div>
    <h2>Любишь печеньки?</h2>
      <p><input type="radio" name="radio" value="1"
      checked={value == '1' ? true : false}
      onChange={chengeValue} /><label>Да</label></p>

      <p><input type="radio" name="radio" value="2"
      checked={value == '2' ? true : false}
      onChange={chengeValue} /><label>Конечно</label></p>
   </div>;
}

export default Radio;