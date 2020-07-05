import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import PaymentPage from './pages/PaymentPage';
import AddressPage from './pages/AddressPage';
import NotificationPage from './pages/NotificationPage';
import TabLayout from './components/base/TabLayout';
import Dialog from './components/Dialog';
import Toast from './components/Toast';
import Modal from './components/Modal';
import resetStyles from './resetCss';

function App() {
  return (
    <Dialog.Provider>
      <Toast.Provider>
        <Modal.Provider>
          <Router>
            <Global styles={resetStyles} />
            <TabLayout>
              <Switch>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/account">
                  <AccountPage />
                </Route>
                <Route path="/paymethod">
                  <PaymentPage />
                </Route>
                <Route path="/address">
                  <AddressPage />
                </Route>
                <Route path="/notification">
                  <NotificationPage />
                </Route>
                <Route path="/">
                  <AddressPage />
                </Route>
              </Switch>
            </TabLayout>
          </Router>
        </Modal.Provider>
      </Toast.Provider>
    </Dialog.Provider>
  );
}

export default App;
