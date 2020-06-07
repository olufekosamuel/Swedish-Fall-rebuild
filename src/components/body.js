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
					<div className=" bannerhome" style={{backgroundImage:`url(${img1})`}}>
					</div>

				</div>
			</section>
			<section className="bg0 p-t-23 p-b-140">
				<div className="container">
				<div className="row isotope-grid" style={{margin: "auto 0"}}>
				<div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
			
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={img1} alt="IMG-PRODUCT"/>

							<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Esprit Ruffle Shirt
								</a>

								<span className="stext-105 cl3">
									$16.64
								</span>
							</div>

							<div className="block2-txt-child2 flex-r p-t-3">
								<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
									<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>


				

				<div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
			
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={img7} alt="IMG-PRODUCT"/>

							<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Shirt in Stretch Cotton
								</a>

								<span className="stext-105 cl3">
									$52.66
								</span>
							</div>

							<div className="block2-txt-child2 flex-r p-t-3">
								<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
									<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
				
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={img8} alt="IMG-PRODUCT"/>

							<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									Pieces Metallic Printed
								</a>

								<span className="stext-105 cl3">
									$18.96
								</span>
							</div>

							<div className="block2-txt-child2 flex-r p-t-3">
								<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
									<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
								</a>
							</div>
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