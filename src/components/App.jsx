import React, { useState } from "react";
let CalcButton = (props)=>{
    return <button className={props.className} onClick={()=>{props.onClick(props.value)}}>{props.value}</button>;
}
const App = ()=>{
    let [calc,setCalc] = useState({
        current:"0",
        total:"0",
        isInitial:true,
        preOp:""
    });
   let handleNumber = (value)=>{
        let newValue = value;
        if(!calc.isInitial){
            newValue=calc.current+value;
        }
        
        setCalc({
            current:newValue,
            total:calc.total,
            isInitial:false,
            preOp:calc.preOp
        })
        
   };
   let handleOperator = (value)=>{
        let total  = doCalculation();
        setCalc({current:total.toString(),total:total.toString(),isInitial:true,preOp:value})
   }
   let doCalculation = ()=>{
    let total = parseInt(calc.total);

        switch(calc.preOp){
            case "+":
                total+=parseInt(calc.current);
                break;
            case "-":
                total-=parseInt(calc.current);
                break;
            case "*":
                total*=parseInt(calc.current);
                break;
            case "/":
                total/=parseInt(calc.current);
                break;
            default:
                total=parseInt(calc.current);
        }
        return total;
   }
   let handleClear=()=>{
        setCalc({
            current:"0",
            total:"0",
            isInitial:true,
            preOp:""
        })
   }
   let handleEquals = ()=>{
        let total = doCalculation();
        setCalc({current:total.toString(),total:total.toString(),isInitial:true,preOp:"="});
   }
   let renderDisplay = ()=>{
        return calc.current;
   }
    return (
        <div className="calculator">
        <div className="row">
            <div className="display col-12">{renderDisplay()}</div>
            
            <CalcButton className="col-2 calcbtn" value="7" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="8" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="9" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="/" onClick={handleOperator} />

            <CalcButton className="col-2 calcbtn" value="4" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="5" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="6" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="*" onClick={handleOperator} />

            <CalcButton className="col-2 calcbtn" value="1" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="2" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="3" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="-"  onClick={handleOperator} />

            <CalcButton className="col-2 calcbtn" value="C" onClick={handleClear} />
            <CalcButton className="col-2 calcbtn" value="0" onClick={handleNumber} />
            <CalcButton className="col-2 calcbtn" value="=" onClick={handleEquals} />
            <CalcButton className="col-2 calcbtn" value="+"  onClick={handleOperator} />
            </div>
         
        </div>
    )
}
export default App;