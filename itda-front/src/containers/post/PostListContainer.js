import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/post/PostList';
import { getPosts } from '../../modules/posts';
const PostListContainer = () => {
  const { posts } = useSelector(({ posts }) => {
    return {
      posts: posts.posts,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <PostList posts={posts} />;
};

export default PostListContainer;
