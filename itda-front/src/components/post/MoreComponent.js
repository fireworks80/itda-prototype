import { Dropdown, Menu, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const MoreComponent = ({ onEdit, onDelete, id }) => {
  function handleMenuClick(e) {
    if (e.key === '1') {
      onEdit(id);
    } else {
      onDelete(id);
    }
    // message.info('Click on menu item.');
    console.log('click', id);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1'>수정</Menu.Item>
      <Menu.Item key='2'>삭제</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span className='btn-more'>
        <span className='a11y'>수정 / 삭제하기</span>
        <MoreOutlined />
      </span>
    </Dropdown>
  );
};
export default MoreComponent;
