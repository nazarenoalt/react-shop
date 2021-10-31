import React, { useRef } from 'react';
import './Login.css';
//assets
import Logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData  = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
  }
  
   return (
    <div className="login">
      <div className="login__form-container">
        <img src={Logo} alt="logo" className="login__logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="login__label">Email address</label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="login__input login__input-email" />
          <label htmlFor="password" className="login__label">Password</label>
          <input type="password" name="password" placeholder="*********" className="login__input input-password" />
          <input type="submit" value="Log in" className="login__primary-button login__login-button" onClick={handleSubmit}/>
          <a href="/">Forgot my password</a>
        </form>
        <button className="login__secondary-button login__signup-button" >Sign up</button>
      </div>
</div>

  )
}

export { Login }
