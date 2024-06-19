import { useState } from "react";
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === 'DEL') {
      deleteLastChar();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('');
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  const calculateResult = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        break;
    }
    setDisplay(result.toString());
    setCurrentValue(result.toString());
  };

  const clearDisplay = () => {
    setDisplay('0');
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
  };

  const deleteLastChar = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+', 'DEL'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
