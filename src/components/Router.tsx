import FullSignUpForm from 'src/pages/signUp/components/FullSignUpForm';
import FullSignInForm from 'src/pages/signIn/components/FullSignInForm';
import {Landing} from 'src/pages/landing/Landing';


import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  export const MainRouter = () => {
    return (
      <Router> 
      <Switch>      
        <Route exact path="/">
        <Landing/>
        </Route>
        <Route exact path="/login">
        <FullSignInForm/>
        </Route>
        <Route exact path="/signup">
        <FullSignUpForm/>
        </Route>

      </Switch>
  
      </Router>
    );
  };
  
  