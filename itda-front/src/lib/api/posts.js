import axios from 'axios';

export const addPost = (writePost) => axios.post('/api/post', writePost);

export const getPosts = () => axios.get('/api/posts');

export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const updatePost = ({ id, board_title, board_content, board_category_cd, board_tag, board_datetime }) =>
  axios.patch(`/api/posts/${id}`, {
    board_title,
    board_content,
    board_category_cd,
    board_tag,
    board_datetime,
  });

export const deletePost = (id) => axios.delete(`/api/posts/${id}`);
