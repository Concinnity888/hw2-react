import { useState } from 'react';
import style from './style.module.css';

const Input = ({ inputValue, id, inputName, label, error, required, placeholder, onHandleChange }) => {
  const [value, setValue] = useState(inputValue);
  const handleChange = (evt) => {
    setValue(evt.target.value);
    onHandleChange(evt.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div className={ style.Input }>
      {
        label &&
        <div className={ style.Input__labels }>
          {
            label && <label className={ style.Input__label } htmlFor={ id } placeholder={ placeholder || '' } >{ label }</label>
          }
          {
            required && <span className={ style.Input__required }>*</span>
          }
        </div>
      }

      <div className={ style.Input__fieldWrap }>
        <input
          className={`${ style.Input__field } ${ error ? style.Input__field_invalid : '' }`}
          type="text"
          value={ value }
          onChange={ handleChange }
          name={ inputName }
          id={ id || null }
        />
        { value && <button onClick={ handleReset } className={ style.Input__btnReset }></button>}
      </div>
    </div>
  );
};

export default Input;
