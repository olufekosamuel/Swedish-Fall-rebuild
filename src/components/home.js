import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import Body from './body';




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
                
               
                
                <Route exact path="/" component={Body}/>
                
               
                
                <br/>
                <br/>

            </>
        )
    }
}

export default Home;