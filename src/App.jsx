import { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0'); // Valor en pantalla
  const [firstOperand, setFirstOperand] = useState(null); // Primer operando ingresado
  const [operator, setOperator] = useState(null); // Signo de la operación

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (op) => {
      const result = calculate();
      setFirstOperand(result);
      setOperator(op);
      setDisplayValue(' ');
  };

  const calculate = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result=(num1 + num2);
        break;
      case '-':
        result=(num1 - num2);
        break;
      case '*':
        result=(num1 * num2);
        break;
      case '/':
        result=(num1 / num2);
        break;
      case '%':
        result=((num1 / 100) * num2);
        break;
      default:
        return displayValue;
    }
    if (!Number.isInteger(result)) {
      result = result.toFixed(4);
    }

    return result.toString();
  };

  const handleEqualsClick = () => {
    if (firstOperand !== null) {
      const result = calculate();
      setFirstOperand(null);
      setOperator(null);
      setDisplayValue(result);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
  };

  const handleDecimalPoint = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  return (
    <div className="calculator rounded-md">
      <div className="display"> 
        <h1 className='displayText text-7xl'>{displayValue}</h1>
      </div>
      <div className="buttons">
        <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-5 gap-3">
          <div className='flex justify-center col-span-2 buttonClean'>
            <button className="buttonLg rounded-full" 
                    onClick={() => handleClear()}>
                    AC
            </button>
          </div>
          <div>
            <button className="buttonOperation rounded-full" 
                    onClick={() => handleOperatorClick('%')}>
                    %
            </button>
          </div>
          <div>
            <button className="buttonOperation rounded-full" 
                    onClick={() => handleOperatorClick('/')}>
                    /
            </button>
          </div>
          <div className='col-span-3 row-span-4'>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-3">
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('1')}>
                        1
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('2')}>
                        2
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('3')}>
                        3
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('4')}>
                        4
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('5')}>
                        5
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('6')}>
                        6
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('7')}>
                        7
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('8')}>
                        8
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full" 
                        onClick={() => handleNumberClick('9')}>
                        9
                </button>
              </div>
              <div className='flex justify-center col-span-2'>
                <button className="buttonLg rounded-full" 
                        onClick={() => handleNumberClick('0')}>
                        0
                </button>
              </div>
              <div>
                <button className="buttonNumber rounded-full"
                        onClick={() => handleDecimalPoint()}>
                          ,
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="buttonOperation rounded-full"
                    onClick={() => handleOperatorClick('*')}>
                    *
            </button>
          </div>
          <div>
            <button className="buttonOperation rounded-full"
                    onClick={() => handleOperatorClick('+')}>
                    +
            </button>
          </div>
          <div>
            <button className="buttonOperation rounded-full"
                    onClick={() => handleOperatorClick('-')}>
                    -
            </button>
          </div>
          <div>
            <button className="buttonEquals rounded-full" 
                    onClick={() => handleEqualsClick()}>
                    =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;