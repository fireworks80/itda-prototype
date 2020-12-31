import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comments from '../../components/post/Comments';
import { getPost } from '../../modules/post';

const CommentContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [success, setSuccess] = useState(false);
  const [remove, setRemove] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const onSave = useCallback(
    (variable) => {
      axios.post('/api/comment', variable).then((res) => {
        if (res.data.success) {
          setSuccess(res.data.success);
        } else {
          console.error('error');
        }
      });
    },
    [success]
  );

  const onEdit = useCallback((id) => {
    // console.log(id);
    const result = list.find((item) => item._id === id);
    setEditItem({ _id: result._id, content: result.content });
  });

  const onDelete = useCallback(
    (commentId) => {
      axios.delete(`/api/comment/${commentId}`).then((res) => {
        setRemove(res.data.remove);
      });
    },
    [remove]
  );

  const onChangeEditValue = useCallback(
    (value) => {
      // console.log(value);
      setEditItem((item) => ({ ...item, content: value }));
      // console.log(editItem);
    },
    [editItem]
  );

  const onUpdateComment = useCallback(() => {
    const result = list.map((item) => (item._id === editItem._id ? { ...item, content: editItem.content } : item));
    setList(result);
    setEditItem(null);

    axios.patch('/api/comment', editItem);
  }, [list, editItem]);

  useEffect(() => {
    setSuccess(false);
    setRemove(false);

    axios.get(`/api/comment/${id}`).then((res) => {
      setList(res.data.comments);
      dispatch(getPost(id));
    });
  }, [success, remove]);

  return (
    <Comments
      list={list}
      id={id}
      editItem={editItem}
      onSave={onSave}
      onEdit={onEdit}
      onChangeEditValue={onChangeEditValue}
      onUpdateComment={onUpdateComment}
      onDelete={onDelete}
    />
  );
};

export default CommentContainer;
