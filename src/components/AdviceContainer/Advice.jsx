import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import './Advice.css';

function Advice() {
  return (
    <div className='advice'>
      <p className='advice__number'>Advice #117</p>
      <h1 className='advice__text'>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </h1>
      <Divider />
      <Button />
    </div>
  );
}

export default Advice;
