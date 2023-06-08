import React, { useState } from 'react';
import '../App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (display === '0' || waitingForSecondOperand) {
      setDisplay(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator && !waitingForSecondOperand) {
      const result = performCalculation(firstOperand, inputValue, operator);
      setDisplay(result);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(selectedOperator);
  };

  const handleEqualClick = () => {
    const inputValue = parseFloat(display);

    if (operator && !waitingForSecondOperand) {
      const result = performCalculation(firstOperand, inputValue, operator);
      setDisplay(result);
      setFirstOperand(result);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performCalculation = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="container-md px-2 text-center">
      <h1>Calculator</h1>
      <br></br>
      <div className="logo"><h1>{display}</h1></div>
      <br></br>
      <div className="row">
        <div className="btn-group btn-group-lg g-col-6 g-col-md-4" role="group" aria-label="Large button group">
          <button className='btn btn-primary' onClick={() => handleNumberClick('7')}>7</button> &nbsp;
          <button className='btn btn-primary' onClick={() => handleNumberClick('8')}>8</button> &nbsp;
          <button className='btn btn-primary' onClick={() => handleNumberClick('9')}>9</button> &nbsp;
          <button className='btn btn-warning' onClick={() => handleOperatorClick('+')}>+</button> &nbsp;
        </div>
      </div>
      <br></br>
      <div className="row">
        <div  className="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <button className='btn btn-primary' onClick={() => handleNumberClick('4')}>4</button>&nbsp;
          <button className='btn btn-primary' onClick={() => handleNumberClick('5')}>5</button>&nbsp;
          <button className='btn btn-primary' onClick={() => handleNumberClick('6')}>6</button>&nbsp;
          <button className='btn btn-warning' onClick={() => handleOperatorClick('-')}>-</button>&nbsp;
        </div>
      </div>
      <br></br>
      <div className="row">
        <div  className="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <button  className='btn btn-primary' onClick={() => handleNumberClick('1')}>1</button>&nbsp;
          <button  className='btn btn-primary' onClick={() => handleNumberClick('2')}>2</button>&nbsp;
          <button  className='btn btn-primary'onClick={() => handleNumberClick('3')}>3</button>&nbsp;
          <button className='btn btn-warning' onClick={() => handleOperatorClick('/')}>/</button>&nbsp;
        </div>
      </div>
      <br></br>
      <div className="row">
        <div  className="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <button  className='btn btn-primary' onClick={() => handleNumberClick('0')}>0</button>&nbsp;
          <button className='btn btn-warning' onClick={() => handleOperatorClick('*')}>*</button>&nbsp;
          <button  className='btn btn-light' onClick={handleClearClick}>C</button>&nbsp;
          <button  className='btn btn-success' onClick={() => handleEqualClick()}>=</button>&nbsp;
        </div>
      </div>
    </div>
  );
};

export default Calculator;
