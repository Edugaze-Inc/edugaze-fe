import FullSignUpForm from 'src/pages/signUp/components/FullSignUpForm';
import FullSignInForm from 'src/pages/signIn/components/FullSignInForm';
import { Landing } from 'src/pages/landing/Landing';
import ScrollToTop from 'src/components/ScrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHomepage } from './pages/dashboard/DashboardHomepage';
import MeetingsPage from './pages/dashboard/MeetingsPage';

export const MainRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <FullSignInForm />
        </Route>
        <Route exact path="/signup">
          <FullSignUpForm />
        </Route>
        <Route exact path="/dashboard">
          <DashboardHomepage />
        </Route>
      </Switch>
    </Router>
  );
};
