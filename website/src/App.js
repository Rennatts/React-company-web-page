import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

export default App;

