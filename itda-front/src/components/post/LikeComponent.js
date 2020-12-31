import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
const LikeComponent = () => {
  const [like, setLike] = useState(false);
  const onChangeLike = (e) => {
    setLike(e.target.checked);
  };
  return (
    <label className='recommend-con recommend-con--likes'>
      <input className='a11y' checked={like} onChange={onChangeLike} type='checkbox' name='likes' />
      {like ? <HeartFilled /> : <HeartOutlined />}4 Likes
    </label>
  );
};

export default LikeComponent;
