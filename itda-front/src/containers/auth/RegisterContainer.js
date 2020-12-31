import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterContainer = () => {
  const dispatch = useDispatch();

  const { form } = useSelector(({ auth }) => ({ form: auth.register }));

  const onChange = (form) => {
    const key = Object.keys(form)[0];
    const value = form[key];
    dispatch(changeField({ form: 'register', key, value }));
  };

  // const onSubmit = () => {
  //   console.log('register submit');
  // };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return <AuthForm type='register' form={form} onChange={onChange} />;
};

export default RegisterContainer;
