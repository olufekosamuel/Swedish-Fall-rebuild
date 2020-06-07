import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Body from './body';
import Shop from './shop';
import Contact from './contact';
import Checkout from './checkout';

class Home extends Component{

    componentDidMount() {
        
    }

    logout(){
        localStorage.removeItem('current_wallet');
        localStorage.removeItem('userData');
        window.location.href = '/';
    }
    
    render(){
        return(
            <>
                <Header/>
                <br/>
                <br/>
                
                <Route exact path="/" component={Body}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/checkout" component={Checkout}/>
                <br/>

                <Footer/>
            </>
        )
    }
}

export default Home;