import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import img1 from '../assets/images/product-01.jpg';
import img2 from '../assets/images/product-02.jpg';
import img3 from '../assets/images/product-03.jpg';
import img4 from '../assets/images/product-04.jpg';
import img5 from '../assets/images/product-05.jpg';
import img6 from '../assets/images/product-06.jpg';
import img7 from '../assets/images/product-07.jpg';
import img8 from '../assets/images/product-08.jpg';


class Contact extends Component{

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
			<br/>
			</>
        )
    }
}

export default Contact;