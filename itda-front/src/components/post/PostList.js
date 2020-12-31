import { Link } from 'react-router-dom';
import moment from 'moment';
import TagComponent from './TagComponent';
import FlagComponent from './FlagComponent';
import { Menu, Dropdown, Button } from 'antd';
import { MessageOutlined, HeartFilled, DownOutlined } from '@ant-design/icons';
import Flags from '../sidebar/Flags';

// ========================================
// a list item
// ========================================

const stripedHtml = (str) => str.trim().replace(/<[^>]+>|&nbsp;/g, '');
const collapsedText = (txt, cb) => {
  const pureTxt = cb ? cb(txt) : txt;

  return pureTxt.length < 200 ? pureTxt : pureTxt.slice(0, 200) + '...';
};

const ListItem = ({ item }) => {
  const { _id, board_datetime, board_title, board_content, board_category_cd, board_tag, board_comment_count } = item;
  return (
    <li className='c-list__item'>
      <p className='c-list__date'>{moment(board_datetime).fromNow()}</p>
      <Link to={`/questionDetail/${_id}`}>
        <p className='c-list__tit'>
          {board_title} <FlagComponent flagId={board_category_cd} />
        </p>
      </Link>
      <p className='c-list__desc'>{collapsedText(board_content, stripedHtml)}</p>
      <div className='c-list__interest'>
        <TagComponent strTag={board_tag} />

        <p className='c-list__likes'>
          <span>
            <MessageOutlined /> {board_comment_count} comments
          </span>
          <span>
            <HeartFilled /> 0 Likes
          </span>
        </p>
      </div>
    </li>
  );
};

// ========================================
// sort menu / item
// ========================================
const menuSort = (
  <Menu>
    <Menu.Item key='0'>
      <label htmlFor='recommend'>
        <input type='radio' id='recommend' className='a11y' />
        <span>추천 순</span>
      </label>
    </Menu.Item>
    <Menu.Item key='1'>
      <label htmlFor='latest'>
        <input type='radio' id='latest' className='a11y' />
        <span>최신 순</span>
      </label>
    </Menu.Item>
  </Menu>
);

const menuAnswer = (
  <Menu>
    <Menu.Item key='0'>
      <label htmlFor='answerYes'>
        <input type='radio' id='answerYes' className='a11y' />
        <span>있음</span>
      </label>
    </Menu.Item>
    <Menu.Item key='1'>
      <label htmlFor='answerNo'>
        <input type='radio' id='answerNo' className='a11y' />
        <span>없음</span>
      </label>
    </Menu.Item>
  </Menu>
);

export default function PostList({ posts }) {
  return (
    <>
      <div className='c-sort-bar'>
        <Dropdown overlay={menuSort}>
          <Button type='link'>
            정렬 <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menuAnswer}>
          <Button type='link'>
            답변 <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <ul className='c-list'>{posts && posts.map((post) => <ListItem item={post} key={post._id} />)}</ul>
    </>
  );
}
