import style from './style.module.css';
import { useState } from 'react';

const InputNumber = ({ inputValue, inputName, error, onHandleChange }) => {
  const [value, setValue] = useState(inputValue);
  const handleChange = (evt) => {
    const currentValue = evt.target.value.replace(/\D/gi, '');
    setValue(currentValue);
    onHandleChange(currentValue);
  };

  return (
    <div className={ style.InputNumber }>
      <label className={ style.InputNumber__label }>
        Synchronize every
        <input
          className={`${ style.InputNumber__field } ${ error ? style.InputNumber__field_invalid : '' }`}
          value={ value }
          onChange={ handleChange }
          name={ inputName }
          type="number"
          min="0"
        />
        minutes
      </label>
    </div>
  );
};

export default InputNumber;
