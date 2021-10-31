import React from 'react'
import Logo from '@logos/logo_yard_sale.svg';
//css
import './RecoveryPassword.css';

const RecoveryPassword = () => {
  return (
    <div className="recovery-password">
        <div className="recovery-password__form-container">
          <img src={Logo} alt="logo" className="recovery-password__logo" />
          <h1 className="recovery-password__title">Create a new password</h1>
          <p className="recovery-password__subtitle">Enter a new passwrd for yue account</p>
          <form action="/" className="recovery-password__form">
            <label htmlFor="password" className="recovery-password__label">Password</label>
            <input type="password" id="password" placeholder="*********" className="recovery-password__input input-password" />
            <label htmlFor="new-password" className="recovery-password__label">Password</label>
            <input type="password" id="new-password" placeholder="*********" className="recovery-password__input recovery-password__input-password" />
            <input type="submit" value="Confirm" className="recovery-password__primary-button recovery-password__login-button" />
          </form>
        </div>
    </div>
    
  )
}

export { RecoveryPassword };