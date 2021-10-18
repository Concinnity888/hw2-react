import { Link } from 'react-router-dom';
import style from './style.module.css';

const Button = ({ children, onHandleClick, typeButton, href, big, invert, border, ml, my, medium }) => {
  const handleClick = (evt) => {
    return onHandleClick(evt);
  };

  return (
    <>
      { typeButton === 'link' ? (
        <Link
        className={`${ style.Btn } ${ big ? style.Btn_size_big : '' } ${ invert ? style.Btn_bg_gray : '' } ${ ml ? style.Btn_margin_left : '' }`}
          to={ href }
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${ style.Btn } ${ big ? style.Btn_size_big : '' } ${ invert ? style.Btn_bg_gray : '' } ${ ml ? style.Btn_margin_left : '' } ${ my ? style.Btn_margin_y : '' } ${ border ? style.Btn_bg_white : '' } ${ medium ? style.Btn_size_middle : '' }`}
          onClick={ onHandleClick ? handleClick : null }
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
