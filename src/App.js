import React from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/fonts/iconic/css/material-design-iconic-font.min.css';
import './assets/fonts/linearicons-v1.0.0/icon-font.min.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
import './assets/vendor/MagnificPopup/magnific-popup.css';
import './assets/vendor/perfect-scrollbar/perfect-scrollbar.css';
import './assets/vendor/slick/slick.css';
import './assets/css/util.css';
import './assets/css/main.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import NotFoundPage from './components/notfound';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
