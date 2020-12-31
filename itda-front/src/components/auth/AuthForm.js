import { Link } from 'react-router-dom';
import { Input, Checkbox, Form } from 'antd';
import {
  VerticalAlignTopOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MedicineBoxOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Password } = Input;

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const titles = {
    login: 'IT여행을 위해 체크인 해 볼까요?',
    register: 'ITDA 회원가입',
  };

  return (
    <div className='auth'>
      <h2 className='a11y'>{`${type === 'login' ? '로그인' : '회원가입'} 페이지`}</h2>
      {/* form */}
      <div className='auth__con'>
        <Link className='auth__link-home' to='/'>
          itda
        </Link>
        <Form className='auth__form' onFinish={onSubmit} onValuesChange={onChange}>
          <fieldset>
            <legend className='auth__form-tit'>{titles[type]}</legend>
            {/* id */}
            <Form.Item name='mem_id' rule={[{ required: true, message: 'ID를 입력하세요' }]}>
              <Input size='large' placeholder='ID' prefix={<UserOutlined />} value={form.mem_id} />
            </Form.Item>
            {/* // id */}

            {/* 이메일 */}
            {type === 'register' && (
              <Form.Item name='mem_email'>
                <Input
                  size='large'
                  prefix={<MailOutlined />}
                  placeholder='EMAIL'
                  value={form.mem_email}
                  rule={[{ required: true, message: 'EMAIL을 입력하세요' }]}
                />
              </Form.Item>
            )}
            {/* // 이메일 */}

            {/* password */}
            <Form.Item name='mem_password'>
              <Password
                size='large'
                placeholder='PASSWORD'
                prefix={<MedicineBoxOutlined />}
                value={form.mem_password}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
            {/* // password */}

            <p className='auth__remember'>
              <Checkbox>{type === 'login' ? 'Remember me' : 'I accept the Terms of Use'}</Checkbox>
              {type === 'login' && (
                <Link className='auth__recovery-pw' to='/accountRecovery'>
                  Forgot Password
                </Link>
              )}
            </p>

            <p className='auth__btns'>
              <Link to='/home'>{type === 'login' ? '로그인' : '가입하기'}</Link>
              {/* <button className={`btn ${type === 'login' && 'btn--text'}`}>
                {type === 'login' ? '로그인' : '가입하기'}
              </button> */}

              {type === 'login' && (
                <Link className='btn' to='/register'>
                  <VerticalAlignTopOutlined className='btn-left-ico' />
                  회원가입 하러가기
                </Link>
              )}
            </p>
          </fieldset>
        </Form>
      </div>
      {/*  //form */}
      <div className='auth__bg'></div>
    </div>
  );
};

export default AuthForm;
