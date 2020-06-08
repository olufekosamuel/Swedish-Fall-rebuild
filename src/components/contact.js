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
            <div className="container" style={{paddingBottom:"100px", paddingTop:"130px"}}>
                <br/><br/>
				<div className="p-b-10 text-center">
					<h3 className="ltext-103 cl5">
						Stay in touch
					</h3>
					<p>Get Breifings from us today</p><br/>
					<button class="stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
						Contact Us
					</button>
				</div>
                <br/>
                <br/>
                <br/> 
			</div>
        )
    }
}

export default Contact;