import React, {useEffect} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Register from './companies/register/Register';
import Login from './companies/Login';
import Landing from './pages/Landing';
import Header from './components/header/Header';
import { useDispatch, connect } from 'react-redux';
import { authCheck } from './redux/actions/companyActions';


function Routes({ currentCompany }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authCheck());
    },[dispatch])


    return(
        <div>
            <Router>
                <Header currentUser={ currentCompany && currentCompany }></Header>
                    <Switch>
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/login" component={Login}></Route>
                    </Switch>
            </Router>
        </div>
    );
    
};

const mapStateToProps = ( {company: {currentCompany}} ) => ({
    currentCompany
});



export default connect(mapStateToProps, null)(Routes);