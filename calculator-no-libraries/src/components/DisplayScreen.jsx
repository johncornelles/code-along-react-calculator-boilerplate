import  {useState } from 'react';
import Button from './Button';
import './../styles/DisplayScreen.css';

const DisplayScreen = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => 
    setInput((prev) => prev + value);
  

  const deleteInput = () => 
    setInput(input.slice(0, -1));
  

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      let res = eval(input);
      setResult(res);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="parent">
      <div className="parentOutput">
        <input type='text' value={input} readOnly placeholder='0' />
        <input type='text' value={result} readOnly placeholder='0' />
      </div>
      <div className="btns">
        <Button value={'+'} handleInput={handleInput} />
        <Button value={'-'} handleInput={handleInput} />
        <Button value={'*'} handleInput={handleInput} />
        <Button value={'/'} handleInput={handleInput} />

        <Button value={1} handleInput={handleInput} />
        <Button value={2} handleInput={handleInput} />
        <Button value={3} handleInput={handleInput} />
        <Button value={4} handleInput={handleInput} />

        <Button value={5} handleInput={handleInput} />
        <Button value={6} handleInput={handleInput} />
        <Button value={7} handleInput={handleInput} />
        <Button value={8} handleInput={handleInput} />

        <Button value={9} handleInput={handleInput} />
        <Button value={0} handleInput={handleInput} />
        <Button value={'%'} handleInput={handleInput} />
        <Button value={'.'} handleInput={handleInput} />

        <Button value={'AC'} handleInput={clearInput} />
        <Button value={'DEL'} handleInput={deleteInput} />
        <Button value={'='} handleInput={calculate} />
      </div>
    </div>
  );
};

export default DisplayScreen;