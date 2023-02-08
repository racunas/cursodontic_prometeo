import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderLogin from './components/HeaderLogin';
import LoginCursodontic from './components/LoginCursodontic';
import FooterLogin from './components/FooterLogin'; 

function App() {
  return (
   
    <React.Fragment>

      <BrowserRouter>

        <Switch>

          <Route to="/">

            <HeaderLogin></HeaderLogin>
            <LoginCursodontic></LoginCursodontic>
            <FooterLogin></FooterLogin>
            
          </Route>

        </Switch>

      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
