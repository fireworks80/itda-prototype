import Header from '../components/common/Header';
import HeroContainer from '../containers/HeroContainer';
import { Link } from 'react-router-dom';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
const GreetingPage = () => {
  return (
    <>
      <Header />
      <div className='l-max-width l-center greeting'>
        <h2 className='a11y'>Greeting page</h2>
        <HeroContainer type={'greeting'} />
        <p className='greeting__desc'>itda의 IT 지식 세계를 함께 여행 해 볼까요?</p>

        <div className='greeting__btns'>
          <Link className='btn btn--link' to='/home'>
            <VerticalAlignTopOutlined className='btn--link-ico' />
            둘러보기
          </Link>
        </div>
      </div>
    </>
  );
};
export default GreetingPage;
