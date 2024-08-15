// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGIN_CREDENTIALS = {
  email: 'Hassan@gmail.com',  // البريد الإلكتروني الثابت
  password: 'Admin123'     // كلمة المرور الثابتة
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === LOGIN_CREDENTIALS.email && password === LOGIN_CREDENTIALS.password) {
      localStorage.setItem('auth', 'true'); // تسجيل حالة الدخول في localStorage
      navigate('/Dashboard'); // توجيه المستخدم بعد تسجيل الدخول
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='box-login'>
      <div data-aos="fade-down"  className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              placeholder='Email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='off'
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
