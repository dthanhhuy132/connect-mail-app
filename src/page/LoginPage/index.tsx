import './login.css';
import styled from 'styled-components';
import BlackLogo from '../../Components/Logo/BlackLogo';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import checkValueForSelect from './functionCheckValueForSelect';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  seIsLogin?: any;
}
const Login: React.FC<LoginProps> = ({ seIsLogin }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: 'adminadmin',
    },
  });

  const onSubmit = () => {
    if (isRememberMe) {
      localStorage.setItem('LOGIN_LUON_DI_EM_OI', JSON.stringify(isRememberMe));
    }
    navigate('/main');
  };

  function handleRememberMe(e: any) {
    console.log(e.target.checked);
    setIsRememberMe(e.target.checked);
  }

  useEffect(() => {
    let grayout: HTMLSelectElement | null = document.querySelector('.grayout');

    checkValueForSelect(grayout);

    if (grayout)
      grayout.addEventListener('change', () => {
        checkValueForSelect(grayout);
      });
  });

  return (
    <div className="login">
      <div className="login-container">
        <div className="login__logo flex justify-center align-center">
          <BlackLogo />
        </div>
        <p className="logo__text text-[22px] mt-[20px]">Login to check your email!!</p>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="login__form ">
          <div className="text-left mt-10">
            <label htmlFor="" className="form-label">
              Your Email
            </label>
            <div className="form__control-wrapper">
              <select
                className="form__control grayout"
                defaultValue="-------Choose your email"
                {...register('email', {
                  required: 'Please choose your email!',
                })}
              >
                <option value="" disabled>
                  -------Choose your email
                </option>

                <option value="test1@test.com">test1@test.com</option>
              </select>
              <p className="login-form-error"> {errors.email?.message}</p>
            </div>
          </div>

          <div className="text-left mt-10">
            <label htmlFor="" className="form-label">
              Your Password
            </label>
            <div className="form__control-wrapper relative">
              <input
                className="form__control"
                id="password"
                {...register('password', {
                  required: 'Your password is incorrect!',
                  validate: {
                    checkValue: (value) => value === 'adminadmin' || 'Your password is incorrect!',
                  },
                })}
                type={isShowPassword ? 'text' : 'password'}
              />
              <i
                onClick={() => setIsShowPassword(!isShowPassword)}
                className={`fa-solid fa-eye${isShowPassword ? '-slash' : ''} password-icon`}
              ></i>
            </div>
            <p className="login-form-error">{errors.password?.message}</p>
          </div>

          <div className="text-left mt-10">
            <label
              htmlFor="Remember me"
              className="form-label select-none flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="Remember me"
                className="mr-3 cursor-pointer"
                onChange={handleRememberMe}
              />
              Your Password
            </label>
          </div>

          <input type="submit" className="form__control login-btn-submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
