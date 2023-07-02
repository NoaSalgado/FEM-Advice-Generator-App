import './Button.css';

function Button({ onBtnClick }) {
  return <button className='btn' onClick={onBtnClick}></button>;
}

export default Button;
