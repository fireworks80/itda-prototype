import { flagList } from '../../lib/flagList';
const FlagComponent = ({ flagId }) => {
  return <span className='ico-flag'>{flagList[flagId]}</span>;
};

export default FlagComponent;
