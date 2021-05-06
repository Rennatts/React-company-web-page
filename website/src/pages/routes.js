import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CadastrotrodeEmpresas from './cadastroempresas/CadastrotrodeEmpresas';
import Login from './login/Login';
import Landing from './landing/Landing';

function Routes() {
    return(
        <BrowserRouter>
           <Route path="/" exact component={Landing}></Route>
           <Route path="/cadastroempresas" component={CadastrotrodeEmpresas}></Route>
           <Route path="/login" component={Login}></Route>
        </BrowserRouter>
    );
    
}


export default Routes;