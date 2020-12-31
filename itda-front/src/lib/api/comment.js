import axios from 'axois';

export const writeComment = ({ id, content }) => axios.post('/api/comment', { id, content });
export const deleteComment = (id) => axios.delete(`/api/comment${id}`);
