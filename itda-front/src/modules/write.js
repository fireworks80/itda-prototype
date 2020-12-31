import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api/posts';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const WRITE_POST = 'write/WRITE_POST';
const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

const SET_ORIGIN_POST = 'write/SET_ORIGIN_POST';

const UPDATE_POST = 'write/UPDATE_POST';
const UPDATE_POST_SUCCESS = 'write/UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'write/UPDATE_POST_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writePostAsync = (writePost) => async (dispatch) => {
  dispatch({ type: WRITE_POST });
  try {
    const response = await api.addPost(writePost);
    dispatch({
      type: WRITE_POST_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: WRITE_POST_FAILURE,
      payload: err,
    });
    throw err;
  }
};

export const setOriginPost = createAction(SET_ORIGIN_POST, (post) => post);
export const updatePost = (post) => async (dispatch) => {
  dispatch({ type: UPDATE_POST });
  try {
    const response = await api.updatePost(post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: UPDATE_POST_FAILURE, payload: err, error: true });
    throw err;
  }
};

const initialState = {
  board_title: '',
  board_content: '',
  board_category_cd: '0',
  board_tag: '',
  board_datetime: '',
  success: null,
  originPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state, action) => ({
      ...state,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      success: data.success,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: data }) => ({
      ...state,
      success: data.success,
    }),
    [SET_ORIGIN_POST]: (state, { payload: post }) => ({
      ...state,
      board_title: post.board_title,
      board_content: post.board_content,
      board_category_cd: post.board_category_cd,
      board_tag: post.board_tag,
      originPostId: post._id,
    }),
    [UPDATE_POST]: (state) => state,
    [UPDATE_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      success: data.success,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: data }) => ({
      ...state,
      success: data.success,
    }),
  },
  initialState
);

export default write;
