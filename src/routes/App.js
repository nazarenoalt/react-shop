import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from            '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';
//css
import '@styles/Global.css';
//components
import { Layout } from            '@containers/Layout/Layout'
import { Login } from             '@containers/Login/Login';
import { RecoveryPassword } from  '@containers/RecoveryPassword/RecoveryPassword';
import { EmailSent } from         '@containers/EmailSent/EmailSent';
import { Home } from              '@pages/Home';
import { NotFound } from          '@pages/NotFound';
import { CreateAccount } from     '@containers/CreateAccount/CreateAccount';
import { ProductsList } from      '@components/ProductsList/ProductsList';
import { Checkout } from          '@pages/Checkout/Checkout';
import { Orders } from            '@pages/Orders/Orders';
import { MyAccount } from         '@containers/MyAccount/MyAccount';

const App = () => {
  const initialState = useInitialState()
  return (
  <AppContext.Provider value={initialState }>
    <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/email-sent" component={EmailSent} />
              <Route exact path="/create-account" component={CreateAccount} />
              <Route exact path="/recovery-password" component={RecoveryPassword} />
              <Route exact path="/products-list" component={ProductsList} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/my-account" component={MyAccount} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </AppContext.Provider>
  );
}

export { App };