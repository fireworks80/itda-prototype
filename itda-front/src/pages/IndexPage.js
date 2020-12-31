import HeroContainer from '../containers/HeroContainer';
import PostListContainer from '../containers/post/PostListContainer';

export default function IndexPage() {
  return (
    <div className='l-main p-home'>
      <HeroContainer type={'index'} />
      <PostListContainer />
    </div>
  );
}
