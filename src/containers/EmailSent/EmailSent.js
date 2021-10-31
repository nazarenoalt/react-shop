import React from 'react'
import './EmailSent.css';
import Logo from '@logos/logo_yard_sale.svg';
import EmailIcon from '@icons/email.svg';
const EmailSent = () => {
  return (
    <div className="email-sent">
    <div className="email-sent__form-container">
      <img src={Logo} alt="logo" className="email-sent__logo" />
      <h1 className="email-sent__title">Email has been sent!</h1>
      <p className="email-sent__subtitle">Please check your inbox for instructions on how to reset the password</p>
      <div className="email-sent__email-image">
        <img src={EmailIcon} alt="email" />
      </div>
      <button className="email-sent__primary-button email-sent__login-button">Login</button>
      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}

export { EmailSent }
