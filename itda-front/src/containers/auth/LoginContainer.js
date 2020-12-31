import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => {
    return {
      form: auth.login,
    };
  });

  const onChange = (form) => {
    const key = Object.keys(form)[0];
    const value = form[key];
    dispatch(changeField({ form: 'login', key, value }));
  };

  // const onSubmit = () => {
  //   // history.push('/home');
  //   console.log(props);
  // };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <AuthForm type='login' form={form} onChange={onChange} />;
};

export default LoginContainer;
