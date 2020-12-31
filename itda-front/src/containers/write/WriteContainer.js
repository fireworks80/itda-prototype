import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Write from '../../components/write/Write';
import { changeField, initialize, writePostAsync, updatePost } from '../../modules/write';

const WriteContainer = () => {
  const { category } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { success, board_title, board_content, board_category_cd, board_tag, postId } = useSelector(({ write }) => ({
    success: write.success,
    board_title: write.board_title,
    board_content: write.board_content,
    board_category_cd: write.board_category_cd,
    board_tag: write.board_tag,
    postId: write.originPostId,
  }));

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (postId) {
      dispatch(
        updatePost({ id: postId, board_title, board_content, board_category_cd, board_tag, board_datetime: Date.now() })
      );
    } else {
      dispatch(writePostAsync({ board_title, board_category_cd, board_content, board_tag }));
    }
  };

  useEffect(() => {
    if (success) history.push('/posts');
    return () => {
      dispatch(initialize());
    };
  }, [history, dispatch, success]);
  return (
    <Write
      category={category}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      title={board_title}
      flag={board_category_cd}
      content={board_content}
      tags={board_tag}
      postId={postId}
    />
  );
};

export default WriteContainer;
