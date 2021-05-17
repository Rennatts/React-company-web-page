import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CadastrotrodeEmpresas from './cadastroempresas/CadastrotrodeEmpresas';
import Login from './login/Login';
import Landing from './landing/Landing';

function Routes() {
    return(
        <BrowserRouter>
           <Route exact path="/" exact component={Landing}></Route>
           <Route exact  path="/register" component={CadastrotrodeEmpresas}></Route>
           <Route exact  path="/login" component={Login}></Route>
        </BrowserRouter>
    );
    
}


export default Routes;