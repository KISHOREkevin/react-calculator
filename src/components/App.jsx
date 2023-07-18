import React from "react";
let CalcButton = (props)=>{
    return <button className={props.className} onClick={()=>{props.onClick(props.value)}}>{props.value}</button>;
}
const App = ()=>{
   let handleNumber = (value)=>{
        alert(value)
   }
   let handleOperator = (value)=>{

   }
    return (
        <div className="calculator">
            <div className="display">0</div>
            <CalcButton value="7" onClick={handleNumber} />
            <CalcButton value="8" onClick={handleNumber} />
            <CalcButton value="9" onClick={handleNumber} />
            <CalcButton value="/" className="operator" onClick={handleOperator} />

            <CalcButton value="4" onClick={handleNumber} />
            <CalcButton value="5" onClick={handleNumber} />
            <CalcButton value="6" onClick={handleNumber} />
            <CalcButton value="*" className="operator" onClick={handleOperator} />

            <CalcButton value="1" onClick={handleNumber} />
            <CalcButton value="2" onClick={handleNumber} />
            <CalcButton value="3" onClick={handleNumber} />
            <CalcButton value="-" className="operator" onClick={handleOperator} />

            <CalcButton value="C" />
            <CalcButton value="0" onClick={handleNumber} />
            <CalcButton value="="  />
            <CalcButton value="+" className="operator" onClick={handleOperator} />
        </div>
    )
}
export default App;