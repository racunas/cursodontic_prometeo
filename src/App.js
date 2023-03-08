import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderLogin from './components/HeaderLogin';
import LoginCursodontic from './components/LoginCursodontic';
import FooterLogin from './components/FooterLogin'; 
import Chatbot from './components/Chatbot';

function App() {
  return (
   
    <React.Fragment>

      <BrowserRouter>

        <Switch>


          <Route path="/chatbot/" exact>

            <Chatbot></Chatbot>

          </Route>

          <Route path="/">

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
