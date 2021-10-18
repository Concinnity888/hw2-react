import { useEffect } from 'react';
import Portal from '../Portal';
import Button from '../Button';
import Input from '../Input';
import style from './style.module.css';

const Popup = ({ isOpen, onCancel, onSubmit}) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 27) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return function () {
      document.removeEventListener('keyup', handleKeyUp)
    };
  });

  const handlerPopupClick = (evt) => {
    const className = style.Popup;
    if (evt.target.classList.contains(className)) {
      onCancel();
    }
  };

  return (
    <>
      { isOpen &&
        <Portal>
          <div className={ style.Popup } onClick={ handlerPopupClick }>
            <div className={ style.Popup__content }>
              <h2 className={ style.Popup__title }>New build</h2>
              <p className={ style.Popup__desc }>Enter the commit hash which you want to build.</p>
              <form>
                <Input inputName="commitHash" />
                <div>
                  <Button onHandleClick={ onSubmit }>Run build</Button>
                  <Button onHandleClick={ onCancel } border ml>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        </Portal>
      }
    </>
  );
}

export default Popup;
