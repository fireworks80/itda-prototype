import { Tag } from 'antd';

const keywords = [
  'safeagile',
  'atlassian',
  'java',
  'design',
  'spring',
  'openstack',
  'linux',
  'python',
  'html',
  'C#',
  'sql',
  'android',
  'nodejs',
];

const TagItem = ({ name }) => {
  return (
    <Tag className='communities__tag' color='success'>
      {name}
    </Tag>
  );
};

export default function Communities() {
  return (
    <div className='c-card communities'>
      <h2 className='c-card__tit'>Communities</h2>
      {keywords.map((keyword, idx) => (
        <TagItem key={idx} name={keyword} />
      ))}
    </div>
  );
}
