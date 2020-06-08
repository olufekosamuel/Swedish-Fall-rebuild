import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import banner from '../assets/images/swebanner.png';
import img1 from '../assets/images/product-01.jpg';
import img2 from '../assets/images/product-02.jpg';
import img3 from '../assets/images/product-03.jpg';
import img4 from '../assets/images/product-04.jpg';
import img5 from '../assets/images/prod7.jpg';
import img6 from '../assets/images/bottoms.jpg';
import img7 from '../assets/images/tops.jpg';
import img8 from '../assets/images/product-08.jpg';


class Body extends Component{

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
			<section>
				<div className="container">
					<div className="bannerhome" style={{backgroundImage:`url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
						<div className="text-center" style={{paddingTop:"200px"}}>
							<p style={{color:"black", fontWeight:"600"}}>New Arrivals</p><br></br>
							<h1 style={{color: "black",lineHeight:"50px", fontSize:"43px", fontWeight: "bold"}}>Enjoy This<br/>Summer Trends</h1>
							<br></br><p style={{color:"black", fontWeight:"600"}}>On Eligible Items in order of $100 or more</p>
							<br/><br/>
							<Link to="/shop">
							<button class="stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
								Shop Now
							</button>
							</Link>
						</div>
						
					</div>

				</div>
			</section>
			<section className="bg0 p-t-23 p-b-140">
				<div className="container">
				<div className="row">
				<div className="col-sm-4 col-md-4 col-lg-4">
			
					<div className="block2">
						<div className="block2-pic hov-img0"  style={{borderRadius:"1%"}}>
							<img src={img5} alt="IMG-PRODUCT"/>

							<Link to="/shop/" className="home2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Latest
							</Link>
						</div>

					
					</div>
				</div>


				

				<div className="col-sm-4 col-md-4 col-lg-4"  >
			
					<div className="block2" >
						<div className="block2-pic hov-img0"  style={{borderRadius:"1%"}}>
							<img src={img6} alt="IMG-PRODUCT"/>

							<Link to="/shop/bottoms" className="home2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Bottoms
							</Link>
						</div>

						
					</div>
				</div>

				
				<div className="col-sm-4 col-md-4 col-lg-4">
			
					<div className="block2">
						<div className="block2-pic hov-img0"  style={{borderRadius:"1%"}}>
							<img src={img7} alt="IMG-PRODUCT"/>

							<Link to="/shop/tops">
							<div href="#" className="home2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Tops
							</div>
							</Link>
						</div>

					</div>
				</div>

			</div>
				</div>
			</section>
			<div className="container">
				<div className="p-b-10 text-center">
					<h3 className="ltext-103 cl5">
						Stay in touch
					</h3>
					<p>Get Breifings from us today</p><br/>
					<button class="stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
						Contact Us
					</button>
				</div>
			</div>
			</>
        )
    }
}

export default Body;