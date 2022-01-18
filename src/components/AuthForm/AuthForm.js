import React from 'react';
import classNames from 'classnames';
import './AuthForm.css';

export default function AuthForm({
  errorMsg,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  type,
  setType,
}) {
  return (
    <div className="auth">
      <div className="auth-header">
        <span
          className={classNames({ active: type === 'signin' })}
          onClick={() => {
            setType('signin');
          }}
        >
          Sign-in
        </span>
        <span
          className={classNames({ active: type === 'signup' })}
          onClick={() => {
            setType('signup');
          }}
        >
          Sign-up
        </span>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          className="text-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          className="text-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input className="button" type="submit" />
        <span className="error">{errorMsg}</span>
      </form>
    </div>
  );
}
