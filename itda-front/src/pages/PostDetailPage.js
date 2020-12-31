import PostViewerContainer from '../containers/post/PostViewerContainer';
import CommentContainer from '../containers/post/CommentContainer';
const PostDetailPage = () => {
  return (
    <article className='l-main question-read'>
      <PostViewerContainer />
      <CommentContainer />
    </article>
  );
};
export default PostDetailPage;
