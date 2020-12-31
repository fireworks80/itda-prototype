import { useState, useRef, useEffect, useCallback } from 'react';
import { Avatar, Input, Button } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { DownOutlined, UpOutlined, PlusOutlined, UserOutlined, HeartFilled } from '@ant-design/icons';

// ===============================================
// drop down menu
// ===============================================
const menus = [
  'Agile',
  'C#',
  'Atlassian',
  'Html',
  'JAVA',
  'HANU',
  'AWS',
  'Spring',
  'Python',
  'Linux',
  'Node.js',
  'DevOps',
];

const DropdownMenu = ({ refMenu, isShow, menus, onToggle }) => {
  return (
    <div className={'header__dropdown ' + (isShow && 'is-active')}>
      <ul ref={refMenu} className='header__dropdown-con l-max-width l-center'>
        {menus.map((menu, idx) => (
          <li className='header__dropdown-item' key={idx} onClick={() => onToggle(false)}>
            <Link className='header__dropdown-link' to={`/posts/${menu}`}>
              <HeartFilled />
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ===============================================
// Header
// ===============================================
export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const { Search } = Input;
  const { pathname } = useLocation();
  const gnbWrapRef = useRef();

  const handleGnbClick = useCallback(
    (e) => {
      if (isShow) {
        if (gnbWrapRef.current && gnbWrapRef.current.contains(e.target)) {
          onToggleDropdown(true);
        } else {
          onToggleDropdown(false);
        }
      }
    },
    [isShow]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleGnbClick);
  }, [isShow, gnbWrapRef]);

  const isRootPath = () => {
    return pathname === '/';
  };

  const matchHome = useRouteMatch({
    path: '/home',
    exact: true,
  });

  const matchMy = useRouteMatch({
    path: '/myAccount',
  });

  const onSearch = (value) => console.log(value);

  const onToggleDropdown = useCallback(
    (value) => {
      setIsShow(value);
    },
    [isShow]
  );

  return (
    <header className={'header ' + (!isRootPath() && 'header--sub')}>
      <div className='header__inner l-center l-max-width'>
        <h1 className='header__logo'>
          <Link to='/home'>itda</Link>
        </h1>
        <Search placeholder='input search text' allowClear onSearch={onSearch} style={{ maxWidth: 500 }} />
        {!isRootPath() && (
          <>
            <Button className='btn-gnb' type='link' onClick={() => onToggleDropdown(!isShow)}>
              관심사 {isShow ? <UpOutlined style={{ fontSize: 16 }} /> : <DownOutlined style={{ fontSize: 16 }} />}
            </Button>

            <ul className='header__journey'>
              <li>
                <Link className={'header__journey-link ' + (matchHome ? 'is-active' : '')} to='/home'>
                  모두의 여정
                </Link>
              </li>
              <li>
                <Link className={'header__journey-link ' + (matchMy ? 'is-active' : '')} to='/myAccount'>
                  나의 여정
                </Link>
              </li>
            </ul>
          </>
        )}

        <div className='header__avatars'>
          {isRootPath() ? (
            <Link to='/login'>로그인</Link>
          ) : (
            <>
              <Link className='btn-question' to='/question'>
                <PlusOutlined />
                질문하기
              </Link>
              <Link to='/myAccount'>
                <Avatar size={64} icon={<UserOutlined />} />
              </Link>
            </>
          )}
        </div>
        <DropdownMenu refMenu={gnbWrapRef} isShow={isShow} menus={menus} onToggle={onToggleDropdown} />
      </div>
    </header>
  );
}
