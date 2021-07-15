import FullSignUpForm from 'src/pages/signUp/components/FullSignUpForm';
import FullSignInForm from 'src/pages/signIn/components/FullSignInForm';
import { Landing } from 'src/pages/landing/Landing';
import ScrollToTop from 'src/components/ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { DashboardHomepage } from './pages/dashboard/DashboardHomepage';
import { setMeQueryData, useMeQuery } from './hooks/useMeQuery';
import * as cache from './util/cache';
import { useEffect } from 'react';
import { useState } from 'react';
import { InMemoryToken } from './axios';

async function bootstrap() {
  const me = cache.getMe();
  return me;
}
const bootstrapPromise = bootstrap();
export const MainRouter = () => {
  const meQuery = useMeQuery();
  const [initialAppStatus, setInitialAppStatus] = useState<
    'authenticated' | 'unauthenticated' | 'loading'
  >('loading');

  useEffect(() => {
    bootstrapPromise.then((me) => {
      setInitialAppStatus(me ? 'authenticated' : 'unauthenticated');
      setMeQueryData(me ?? undefined);
      InMemoryToken.set(me?.token);
      console.log(me);
    });
  }, []);

  if (initialAppStatus === 'loading') return null;
  if (!meQuery.data)
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
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/dashboard">
          <DashboardHomepage />
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
};
