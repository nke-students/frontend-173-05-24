import React, { useState } from 'react';

function CheckBoxx() {
   const [checked, setChecked] = useState(true);
   
   let msg;
   if(checked){
      msg = <span>Молодец!</span>
   }else{
      msg = <span>Отобрал, да?</span>
   }

   return <div>
      <h2>Правда пожертвовал?</h2>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span>{msg}</span>
   </div>;
}

export default CheckBoxx;