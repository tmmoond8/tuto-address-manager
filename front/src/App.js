import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import PaymentPage from './pages/PaymentPage';
import AddressPage from './pages/AddressPage';
import NotificationPage from './pages/NotificationPage';
import TabLayout from './components/base/TabLayout';

function App() {
  return (
    <Router>
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
  );
}

export default App;
