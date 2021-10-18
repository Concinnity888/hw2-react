import Button from '../../components/Button';
import style from './style.module.css';

const HomePage = (props) => {
  return (
    <div className={ style.HomeContent }>
      <p className={ style.HomeContent__text }>Configure repository connection and synchronization settings</p>
      <Button typeButton="link" href="/settings" big>Open settings</Button>
    </div>
  );
}

export default HomePage;
