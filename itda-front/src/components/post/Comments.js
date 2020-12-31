import moment from 'moment';
import { useState, useCallback } from 'react';
import { Avatar, Comment, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import LikeComponent from './LikeComponent';
import MoreComponent from '../../components/post/MoreComponent';

const Comments = ({ list, id, editItem, onSave, onEdit, onChangeEditValue, onUpdateComment, onDelete }) => {
  const [commentValue, setCommentValue] = useState('');

  const onChangeCommentValue = useCallback(
    (e) => {
      setCommentValue(e.target.value);
    },
    [commentValue]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log(commentValue);
      const variable = {
        postId: id,
        content: commentValue,
      };
      onSave(variable);
      setCommentValue('');
    },
    [commentValue]
  );

  const onChangeEdit = (e) => {
    // console.log(e.target.value);
    onChangeEditValue(e.target.value);
  };

  const actions = (comment) => {
    return editItem && editItem._id === comment._id
      ? [<Button onClick={onUpdateComment}>Edit</Button>]
      : [<span key='comment-basic-reply-to'>Reply to</span>, <LikeComponent />];
  };
  const content = (comment) => {
    return editItem && editItem._id === comment._id ? (
      <textarea onChange={onChangeEdit} value={editItem.content} className='comments__input'></textarea>
    ) : (
      <p>{comment.content}</p>
    );
  };

  // console.log(editItem);

  return (
    <div className='comments'>
      {/* item */}
      {list.map((comment, idx) => (
        <div className='comments__item' key={idx}>
          <Comment
            actions={actions(comment)}
            author={<a>anonymous</a>}
            avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>}
            content={content(comment)}
            datetime={<span>{moment(comment.datetime).fromNow()}</span>}
          />
          {!editItem && <MoreComponent onEdit={onEdit} onDelete={onDelete} id={comment._id} />}
        </div>
      ))}

      {/* // item */}

      {/* editor */}

      <form className='comments__form' onSubmit={onSubmit}>
        <fieldset>
          <legend className='a11y'>댓글 입력창</legend>
          <textarea onChange={onChangeCommentValue} value={commentValue} className='comments__input'></textarea>
          <Button type='primary' htmlType='submit'>
            <EditOutlined />
            댓글 남기기
          </Button>
        </fieldset>
      </form>
      {/* // editor */}
    </div>
  );
};

export default Comments;
