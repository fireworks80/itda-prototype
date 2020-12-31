import { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../components/common/BreadCrumb';
import PostListContainer from '../containers/post/PostListContainer';
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import circleChart from '../images/temp-circle-chart.png';

export default function SubPage({ type, posts }) {
  const { category } = useParams();

  const [isSubscription, setIsSubscription] = useState(false);

  const onChange = useCallback((e) => {
    setIsSubscription(e.target.checked);
  }, []);

  return (
    <div className='l-main post-list'>
      {category ? (
        // mypage 일떄
        <>
          <BreadCrumb path={`관심사/#${category}`} />
          <header className='post-list__header'>
            <h2 className='question-tit question-tit--ico'>
              #{category} <span className='a11y'>게시글 목록</span>
              <Link to={`/question/${category}`}>
                <FormOutlined />
              </Link>
            </h2>
            <div className='post-list__share'>
              <label className='post-list__subscribe'>
                <input className='a11y' type='checkbox' onChange={onChange} />
                구독{isSubscription && '중'}
              </label>
              <Button type='link'>친구초대</Button>
            </div>
          </header>
          <div className='post-list__counts'>
            <span className='post-list__counts-item'>
              <strong className='post-list__counts-num'>125</strong>
              입국자수
            </span>
            <span className='post-list__counts-item'>
              <strong className='post-list__counts-num'>10</strong>
              게시글수
            </span>
            <span className='post-list__counts-item'>
              <strong className='post-list__counts-num'>3</strong>
              진행 중 이벤트
            </span>
          </div>
        </>
      ) : (
        // 관심사 클릭해서 들어왔을때
        <>
          <h2 className='question-tit'>나의 커뮤니티별 마일리지 현황</h2>
          <div className='mileage l-center'>
            <figure className='mileage__chart'>
              <img src={circleChart} alt='' />
              <figcaption className='a11y'>나의 커뮤니티별 마일리지 차트</figcaption>
            </figure>

            <ul className='mileage__list'>
              <li className='mileage__item'>
                <em className='mileage__tit'>Agile</em> <span>15mileage</span>
              </li>
              <li className='mileage__item'>
                <em className='mileage__tit'>OpenStack</em> <span>15mileage</span>
              </li>
              <li className='mileage__item'>
                <em className='mileage__tit'>Agile</em> <span>15mileage</span>
              </li>
              <li className='mileage__item'>
                <em className='mileage__tit'>Agile</em> <span>15mileage</span>
              </li>
            </ul>
          </div>
        </>
      )}

      <PostListContainer />
    </div>
  );
}
