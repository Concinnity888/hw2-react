import Form from '../../components/Form';
import style from './style.module.css';

const SettingsPage = () => {
  return (
    <div className={ style.SettingsContent }>
      <h2 className={ style.SettingsContent__title }>Settings</h2>
      <p className={ style.SettingsContent__desc }>Configure repository connection and synchronization settings.</p>
      <Form />
    </div>
  );
}

export default SettingsPage;
