import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ path }) => {
  const arrPath = path.split('/');
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to='/home'>itda</Link>
      </Breadcrumb.Item>
      {arrPath.map((path, idx) => (
        <Breadcrumb.Item key={idx}>{path}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
