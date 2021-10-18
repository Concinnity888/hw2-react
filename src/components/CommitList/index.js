import style from './style.module.css';
import CommitItem from '../CommitItem';

const CommitList = ({ commits }) => {
  return (
    <ul className={ style.Commits }>
      {
        commits && commits.map((commit) =>
          <li className={ style.Commits__item } key={ commit.id }>
            <CommitItem commit={ commit } />
          </li>
        )
      }
    </ul>
  );
}

export default CommitList;
