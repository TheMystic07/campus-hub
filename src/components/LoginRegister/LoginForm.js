import React, { useState } from 'react';
import './style_form.css';

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            type="button"
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={toggleForm}
          >
            Log In
          </button>
          <button
            type="button"
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={toggleForm}
          >
            Register
          </button>
        </div>
        <div className="social-icons">
          <img src="images_form/fb.png" alt="" />
          <img src="images_form/gp.png" alt="" />
          <img src="images_form/tw.png" alt="" />
        </div>
        {isLogin ? (
          <form className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
        ) : (
          <form className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms & conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
