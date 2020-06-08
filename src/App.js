import React, {Component} from 'react';
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
import Shop from './components/shop';
import Contact from './components/contact';
import NotFoundPage from './components/notfound';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Checkout from './components/checkout';
import LoadingBar from 'react-top-loading-bar';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loadingBarProgress: 0
    }
  }

  componentDidMount() {
    this.complete()
  }
  
  
  
  
  
  complete = () => {
      this.setState({ loadingBarProgress: 100 });
  };
  
  onLoaderFinished = () => {
      this.setState({ loadingBarProgress: 0 });
  };
  render(){
    return (
      <Provider store={store}>
      <Router>
      <LoadingBar
          progress={this.state.loadingBarProgress}
          height={3}
          color='#717fe0'
          onLoaderFinished={() => this.onLoaderFinished()}
        />
      <Header/>
      <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop}/>
          <Route path="/checkout" component={Checkout}/>
          <Route exact path="/contact" component={Contact}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        <Footer/>
      </Router>
      </Provider>
    );
  }
  
}

export default App;
