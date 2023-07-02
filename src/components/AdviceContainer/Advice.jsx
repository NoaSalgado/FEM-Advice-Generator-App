import { LineWave } from 'react-loader-spinner';
import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import './Advice.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Advice() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNewAdvice();
  }, []);

  async function getNewAdvice() {
    setIsLoading(true);
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
    setIsLoading(false);
  }

  return (
    <div className='advice'>
      {isLoading ? (
        <LineWave
          height='300'
          width='300'
          color='#52ffa8'
          ariaLabel='line-wave'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          firstLineColor=''
          middleLineColor=''
          lastLineColor=''
        />
      ) : (
        <>
          <p className='advice__number'>Advice #{advice.id}</p>
          <h1 className='advice__text'>“{advice.advice}”</h1>
          <Divider />
          <Button onBtnClick={getNewAdvice} />
        </>
      )}
    </div>
  );
}

export default Advice;
