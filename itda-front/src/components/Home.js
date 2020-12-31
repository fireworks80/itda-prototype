import Hero from './Hero';
import PostListContainer from '../containers/post/PostListContainer';
// import List from './common/List';

export default function Home() {
  return (
    <div className='l-main p-home'>
      <Hero />
      <PostListContainer />
    </div>
  );
}
