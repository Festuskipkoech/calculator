import { useState } from "react";
import './Calculator.css';
import { ClearAll } from "@mui/icons-material";
const Calculator = () => {
    const [Display, setDisplay]=useState('0');
    const [currentValue,setCurrentValue]=useState('');
    const [previousValue,setPreviousValue]=useState('');
    const [operator,setOperator]=useState('');

    const handleButtonClick =(value) => {
        if(value === '='){
            calculateResult();
        }
        else if (value === 'C') {
            ClearAll;
        }
        else if (value=== 'DEL') {
            deleteLastChar();

            
        }
    };
    return ( 

     );
}
 
export default Calculator;