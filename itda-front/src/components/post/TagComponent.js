import { Tag } from 'antd';
const TagComponent = ({ strTag }) => {
  const tags = strTag.split(' ');
  return (
    <div>
      {tags.map((tag, idx) => {
        if (idx > 1 && tags.length - 1 === idx) {
          return <span key={idx}>+ {tags.length - 2}</span>;
        }
        return (
          <Tag key={idx} color='success'>
            {tag}
          </Tag>
        );
      })}
    </div>
  );
};

export default TagComponent;
