import { handleActions } from 'redux-actions';
import * as api from '../lib/api/posts';

const LIST_POST = 'posts/LIST_POST';
const LIST_POST_SUCCESS = 'posts/LIST_POST_SUCCESS';
const LIST_POST_FAILURE = 'posts/LIST_POST_FAILURE';

export const getPosts = () => async (dispatch) => {
  dispatch({ type: LIST_POST });
  try {
    const response = await api.getPosts();
    // console.log(response);
    dispatch({
      type: LIST_POST_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: LIST_POST_FAILURE,
      payload: err,
      error: true,
    });

    throw err;
  }
};

const initialState = {
  posts: null,
  error: null,
};

const posts = handleActions(
  {
    [LIST_POST]: (state) => initialState,
    [LIST_POST_SUCCESS]: (state, { payload: { posts } }) => ({
      ...state,
      posts,
    }),
    [LIST_POST_FAILURE]: (state, { payload: { error, posts } }) => ({
      ...state,
      error,
      posts,
    }),
  },
  initialState
);

export default posts;
