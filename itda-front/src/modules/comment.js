import { createAction, handleActions } from 'redux-actions';
import { create } from '../../../itda-backend/models/Posts';
import * as api from '../lib/api/comment';

const INITIALIZE = 'comment/INITIALIZE';
const CHANGE_FIELD = 'comment/CHANGE_FIELD';
const WRITE_COMMENT = 'comment/WRITE_COMMENT';
const WRITE_COMMENT_SUCCESS = 'comment/WRITE_COMMENT_SUCCESS';
const WRITE_COMMENT_FAILURE = 'comment/WRITE_COMMENT_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ id, content }) => ({ id, content }));

export const writeComment = ({ id, content }) => async (dispatch) => {
  dispatch({ type: WRITE_COMMENT });

  try {
    const response = await api.writeComment({ id, content });
    dispatch({
      type: WRITE_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: WRITE_COMMENT_FAILURE,
      payload: err,
      error: true,
    });

    throw err;
  }
};

const initialState = {
  id: '',
  content: '',
  removeSuccess: false,
};

const comment = handleActions({
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { id, content } }) => ({
    id,
    content,
  }),
  [WRITE_COMMENT]: (state) => state,
  [WRITE_COMMENT_SUCCESS]: (state) => state,
});
