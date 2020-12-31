import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined, BellOutlined, BellFilled } from '@ant-design/icons';

export default function UserSummary() {
  const [hasAlam, setHasAlam] = useState(false);

  const onAlamHandler = useCallback(
    (e) => {
      setHasAlam(e.target.checked);
    },
    [hasAlam]
  );

  return (
    <div className='c-card user-summary'>
      <h2 className='a11y'>사용자 요약</h2>
      <div className='clear-fix user-summary__header'>
        <Avatar size='large' icon={<UserOutlined />} />
        <h3 className='c-card__tit'>김종국 여행자님</h3>
        <p>5800 마일리지</p>
      </div>
      <h4 className='user-summary__tit-sub'>구독 중인 커뮤니티</h4>
      <ul className='user-summary__list'>
        <li>
          <Link to='/'>#SAFe Agile</Link>
        </li>
        <li>
          <Link to='/'>#Atlassian</Link>
        </li>
        <li>
          <Link to='/'>#Java</Link>
        </li>
      </ul>

      <h4 className='user-summary__tit-sub'>최근 작성 게시물</h4>
      <ul className='user-summary__list'>
        <li>
          <Link to='/'>Agile 조직문화에 좋은 아틀라시안 툴 문의</Link>
        </li>
      </ul>

      <h4 className='user-summary__tit-sub'>스크랩 게시물</h4>
      <ul className='user-summary__list'>
        <li>
          <Link to='/'>Java의 신 되는 법 공개합니다.</Link>
        </li>
      </ul>
      <label htmlFor='hasAlam' className='user-summary__alam'>
        <input type='checkbox' className='a11y' id='hasAlam' onChange={onAlamHandler} />
        <span className='a11y'>알림설정 버튼</span>
        {hasAlam ? <BellFilled /> : <BellOutlined />}
      </label>
    </div>
  );
}
