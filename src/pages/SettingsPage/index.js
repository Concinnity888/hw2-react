import Form from '../../components/Form';
import style from './style.module.css';

const SettingsPage = ({ settings, onUpdateSettings }) => {
  const onSaveSettings = (evt) => {
    onUpdateSettings({ ...evt });
  };

  return (
    <div className={ style.SettingsContent }>
      <h2 className={ style.SettingsContent__title }>Settings</h2>
      <p className={ style.SettingsContent__desc }>Configure repository connection and synchronization settings.</p>
      <Form settings={ settings } saveSettings={ onSaveSettings } />
    </div>
  );
}

export default SettingsPage;
