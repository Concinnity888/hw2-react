import { format } from 'date-fns';
import { ru } from 'date-fns/esm/locale';
import style from './style.module.css';
import iconDone from '../../asserts/icon-done.svg';
import iconFail from '../../asserts/icon-fail.svg';
import iconActive from '../../asserts/icon-active.svg';

const Commit = ({ commit }) => {
  const iconsMap = {
    done: iconDone,
    fail: iconFail,
    active: iconActive
  };

  const colorMap = {
    done: 'green',
    fail: 'red',
    active: 'orange'
  };
  const titleColor = `Commit__title_color_${ colorMap[commit.state] }`

  const timestamp = commit && commit.date;
  const getFullDate = (timestamp) => {
    const date = new Date(timestamp);
    const dayMonth = format(date, 'dd MMM', { locale: ru }).slice(0, -1);
    const hourMinute = format(date, 'HH:mm', { locale: ru });
    return `${dayMonth}, ${hourMinute}`;
  };

  const committedTime = commit && commit.committed_time;
  const getCommittedTime = (committedTime) => {
    const hours = Math.floor(committedTime / 60);
    const minutes = committedTime % 60;
    return `${hours > 0 ? `${hours} ч ` : ''} ${minutes} мин`;
  };

  return (
    <div className={ style.Commit }>
      <img className={ style.Commit__status } src={ iconsMap[commit.state] } alt="Состояние" />
      <div className={ style.Commit__info }>
        <h2 className={ style.Commit__title }><span className={`${ style.Commit__title_big } ${ style[titleColor] }`}>#{ commit.iid }</span> { commit.title }</h2>
        <div className={ style.Commit__meta }>
          <span className={ style.Commit__branch }>{ commit.branch }</span>
          <span className={ style.Commit__hash }>{ commit.hash }</span>
          <span className={ style.Commit__author }>{ commit.author }</span>
        </div>
      </div>
      <div className={ style.Commit__blockDate }>
        <time className={`${ style.Commit__time } ${ style.Commit__time_full }`}>
          { getFullDate(timestamp) }
        </time>
        <time className={`${ style.Commit__time } ${ style.Commit__time_committed }`}>
          { getCommittedTime(committedTime) }
        </time>
      </div>
    </div>
  );
}

export default Commit;
