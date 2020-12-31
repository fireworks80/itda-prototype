import map from '../images/temp-img-main.png';
import { Avatar } from 'antd';

const HeroRowIndex = ({ row }) => {
  return (
    <tr>
      <td>
        <Avatar size={20} src={row.flag} /> {row.country}
      </td>
      <td>{row.event}</td>
    </tr>
  );
};

const HeroRowGreeting = ({ row }) => {
  return (
    <tr>
      <td>
        <Avatar size={20} src={row.flag} /> {row.country}
      </td>
      <td>{row.rate} %</td>
      <td>{row.post}</td>
    </tr>
  );
};

export default function Hero({ type, data }) {
  return (
    <div className='c-card hero'>
      <figure className='hero__map'>
        <img src={map} alt='' />
      </figure>
      <table className='hero__table'>
        <caption className='a11y'>국가별 핫한 주제</caption>
        <colgroup>
          <col style={{ width: '50%' }} />
          <col span='2' style={{ width: '25%' }} />
        </colgroup>
        <thead>
          {type === 'index' && (
            <tr>
              <th scope='column'>Country</th>
              <th scope='column'>Hot Events</th>
            </tr>
          )}
          {type === 'greeting' && (
            <tr>
              <th scope='column'>Country</th>
              <th scope='column'>점유율</th>
              <th scope='column'>게시글</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((data, idx) =>
            type === 'index' ? <HeroRowIndex key={idx} row={data} /> : <HeroRowGreeting key={idx} row={data} />
          )}
        </tbody>
      </table>
    </div>
  );
}
