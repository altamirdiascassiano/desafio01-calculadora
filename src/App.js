import Input from './components/Input';
import Button from './components/Button';

import { useState } from 'react';
import { Container, Content, Row, Column } from "./components/styles";

const App= () => {
  const [currentNumber, setCurrentNumber]= useState('0');
  const [firstNumber,setFirstNumber]= useState('0');
  const [operation,setOperation]= useState('');

  const handleAddNumber= (num) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleOnClear= () => {
    setCurrentNumber('0');    
    setOperation('')
  }

  const handleSumNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum =Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sum =Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }  

  const handleMultNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const sum =Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }  

  const handleDivNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum =Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }    

  const handleEquals = () => {
    if(firstNumber !== '0' && currentNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;  
        case '*':
          handleMultNumber();
          break;  
        case '/':
          handleDivNumber();
          break;                                  
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultNumber}/>
          <Button label="/" onClick={handleDivNumber}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>        
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>        
        <Row>        
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>        
      </Content>
    </Container>
  );
}

export default App;
