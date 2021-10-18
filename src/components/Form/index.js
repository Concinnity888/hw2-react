import { useState } from 'react';
import { useHistory } from 'react-router';
import Input from '../../components/Input';
import InputNumber from '../../components/InputNumber';
import Button from '../../components/Button';
import style from './style.module.css';

const Form = ({ settings, saveSettings}) => {
  const history = useHistory();
  const [result, setResult] = useState(settings);
  const [errors, setErrors] = useState({
    repository: false,
    command: false,
    time: false
  });

  const handleChangeFieldRepository = (evt) => {
    const value = evt.trim();
    setErrors({ ...errors, repository: false });
    setResult({ ...result, repository: value });
  };

  const handleChangeFieldCommand = (evt) => {
    const value = evt.trim();
    setErrors({ ...errors, command: false });
    setResult({ ...result, command: value });
  };

  const handleChangeFieldBranch = (evt) => {
    const value = evt.trim();
    setResult({ ...result, branch: value });
  };

  const handleChangeFieldTime = (evt) => {
    const value = evt.trim();
    setErrors({ ...errors, time: false });
    setResult({ ...result, time: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const { repository, command, time } = result;

    if (!!repository && !!command && !!time) {
      saveSettings({ ...result });
      history.push('/');
    } else {
      setErrors(() => ({
        repository: !repository,
        command: !command,
        time: !time
      }));
    }
  }

  const onCancel = () => {
    history.goBack();
  };

  return (
    <form onSubmit={ onSubmit } className={ style.Form }>
      <Input
        label="GitHub repository"
        placeholder="user-name/repo-name"
        inputValue={ result.repository }
        inputName="repository"
        id="repository"
        onHandleChange={ handleChangeFieldRepository }
        error={ errors.repository }
        required
      />
      <Input
        label="Build command"
        inputValue={ result.command }
        inputName="command"
        id="command"
        onHandleChange={ handleChangeFieldCommand }
        error={ errors.command }
        required
      />
      <Input
        label="Main branch"
        inputValue={ result.branch }
        onHandleChange={ handleChangeFieldBranch }
        inputName="branch"
        id="branch"
      />
      <InputNumber
        inputValue={ result.time }
        error={ errors.time }
        onHandleChange={ handleChangeFieldTime }
        inputName="branch"
        required
      />

      <div className={ style.Form__btns }>
        <Button typeButton="submit" big>Save</Button>
        <Button typeButton="buttom" onClick={ onCancel } big invert ml>Cancel</Button>
      </div>
    </form>
  );
};

export default Form;
