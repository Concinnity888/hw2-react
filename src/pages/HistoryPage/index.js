import CommitList from '../../components/CommitList';
import Button from '../../components/Button';

const HistoryPage = ({ commits }) => {
  return (
    <>
      <CommitList commits={ commits } />
      <Button typeButton="button" medium invert my>Show more</Button>
    </>
  );
}

export default HistoryPage;
