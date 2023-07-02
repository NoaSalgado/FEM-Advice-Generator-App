import { LineWave } from 'react-loader-spinner';
import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Advice.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Advice() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getNewAdvice();
  }, []);

  async function getNewAdvice() {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip);
    } catch (err) {
      setError(`${err.message} new advice`);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  console.log(error);

  return (
    <div className='advice'>
      {error && <ErrorMessage message={error} />}
      {isLoading && (
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
      )}

      {!error && !isLoading && (
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
