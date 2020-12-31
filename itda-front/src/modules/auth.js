import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// form : register, login
// key: id, email, password
// value: 실제 바꾸려는 값
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

const initialState = {
  register: {
    mem_id: '',
    mem_email: '',
    mem_password: '',
  },
  login: {
    mem_id: '',
    mem_password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    // [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    //   produce(state, (draft) => {
    //     draft[form][key] = value;
    //   }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
