import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PostViewer from '../../components/post/PostViewer';
import { initPost, getPost, deletePost } from '../../modules/post';
import { setOriginPost } from '../../modules/write';
import MoreComponent from '../../components/post/MoreComponent';

const PostViewerContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { post, removeSuccess } = useSelector(({ post }) => ({
    post: post.post,
    removeSuccess: post.removeSuccess,
  }));

  const onEdit = useCallback(() => {
    dispatch(setOriginPost(post));
    history.push('/question');
  }, [post, history, dispatch]);

  const onDelete = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, id, history]);

  useEffect(() => {
    if (removeSuccess) {
      history.push('/posts');
      return;
    }
    dispatch(getPost(id));

    return () => {
      dispatch(initPost());
    };
  }, [dispatch, id, removeSuccess, history]);

  return <PostViewer post={post} More={<MoreComponent onEdit={onEdit} onDelete={onDelete} />} />;
};

export default PostViewerContainer;
