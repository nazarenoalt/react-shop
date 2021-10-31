import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className="create-account__form-container">
        <h1 className="create-account__title">My account</h1>
        <form action="/" className="create-account__form">
          <div>
            <label htmlFor="name" className="create-account__label">Name</label>
            <input type="text" id="name" placeholder="Teff" className="create-account__input input-name" />
            <label htmlFor="email" className="create-account__label">Email</label>
            <input type="text" id="email" placeholder="platzi@example.com" className="create-account__input input-email" />
            <label htmlFor="password" className="create-account__label">Password</label>
            <input type="password" id="password" placeholder="*********" className="create-account__input input-password" />
          </div>
          <input type="submit" defaultValue="Create" className="create-account__primary-button create-account__login-button" />
        </form>
      </div>
</div>

  )
}

export { CreateAccount }
