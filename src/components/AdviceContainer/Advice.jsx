import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import './Advice.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Advice() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    getNewAdvice();
  }, []);

  async function getNewAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
  }

  return (
    <div className='advice'>
      <p className='advice__number'>Advice #{advice.id}</p>
      <h1 className='advice__text'>“{advice.advice}”</h1>
      <Divider />
      <Button onBtnClick={getNewAdvice} />
    </div>
  );
}

export default Advice;
