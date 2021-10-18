import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import style from './style.module.css';
import logo from '../../asserts/logo.svg';
import iconSetting from '../../asserts/icon-setting.svg';
import iconBuild from '../../asserts/icon-play.svg';
import { useSelector } from 'react-redux';

const Header = ({ isSettings, className, onClickBtnOpenPopup }) => {
  const location = useLocation();
  const handleClick = (evt) => {
    return onClickBtnOpenPopup(evt);
  };

  const settings = useSelector((state) => state.settings);

  return (
    <header className={`${ style.Header } ${ className }`}>
      <div className={ style.Header__wrapper }>
        {
          location.pathname === '/history' || (isSettings && location.pathname === '/')
          ?
          <h2 className={ style.Header__title }>{ settings && settings.repository }</h2>
          :
          <Link className={ style.Header__linkLogo } to="/">
            <img className={ style.Header__logo } src={logo} alt="School CI server" />
          </Link>
        }

        {
          !isSettings && location.pathname !== '/history' && location.pathname !== '/settings' && (
            <div>
              <Button typeButton="link" href="/settings" invert>
                <img src={ iconSetting } alt="icon" />
                <span>Settings</span>
              </Button>
            </div>
          )
        }

        {
          ((isSettings && location.pathname !== '/settings') || location.pathname === '/history') && (
            <div>
              <Button typeButton="button" onHandleClick={ handleClick } invert>
                <img src={ iconBuild } alt="icon" />
                <span>Run build</span>
              </Button>
              <Button typeButton="link" href="/settings" invert ml>
                <img src={ iconSetting } alt="icon" />
              </Button>
            </div>
          )
        }
      </div>
    </header>
  );
}

export default Header;
