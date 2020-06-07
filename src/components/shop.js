import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route} from 'react-router-dom';
import img1 from '../assets/images/product-01.jpg';
import img2 from '../assets/images/product-02.jpg';
import img3 from '../assets/images/product-03.jpg';
import img4 from '../assets/images/product-04.jpg';
import img5 from '../assets/images/product-05.jpg';
import img6 from '../assets/images/product-06.jpg';
import img7 from '../assets/images/product-07.jpg';
import img8 from '../assets/images/product-08.jpg';


import { addToCart } from '../actions/cartActions';


class Shop extends Component{

    componentDidMount() {
        console.log(this.props.item);
    }

    logout(){
        localStorage.removeItem('current_wallet');
        localStorage.removeItem('userData');
        window.location.href = '/';
	}
	
	handleClick = (id)=>{
		this.props.addToCart(id);
	}

    render(){
        let itemList = this.props.items.map(item=>{
			return(
				<div key={item.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={item.img} alt="IMG-PRODUCT"/>

							<button  onClick={()=>{this.handleClick(item.id)}} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Add to cart
							</button>
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									{item.name}
								</a>

								<span className="stext-105 cl3">
									${item.price}
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
			)
		})
        return(
            <>
			<br/>
            <section className="bg0 p-t-23 p-b-140">
		<div className="container">
			<div className="p-b-10">
				<h3 className="ltext-103 cl5">
					Product Overview
				</h3>
			</div>

			<div className="flex-w flex-sb-m p-b-52">
				<div className="flex-w flex-l-m filter-tope-group m-tb-10">
					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
						All Products
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
						Women
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
						Men
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
						Bag
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
						Shoes
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
						Watches
					</button>
				</div>

				<div className="flex-w flex-c-m m-tb-10">
					<div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
						<i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
						<i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
						 Filter
					</div>

					<div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
						<i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
						<i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
						Search
					</div>
				</div>
				
	
				<div className="dis-none panel-search w-full p-t-10 p-b-15">
					<div className="bor8 dis-flex p-l-15">
						<button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
							<i className="zmdi zmdi-search"></i>
						</button>

						<input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search"/>
					</div>	
				</div>

			
				<div className="dis-none panel-filter w-full p-t-10">
					<div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
						<div className="filter-col1 p-r-15 p-b-27">
							<div className="mtext-102 cl2 p-b-15">
								Sort By
							</div>

							<ul>
								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										Default
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										Popularity
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										Average rating
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04 filter-link-active">
										Newness
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										Price: Low to High
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										Price: High to Low
									</a>
								</li>
							</ul>
						</div>

						<div className="filter-col2 p-r-15 p-b-27">
							<div className="mtext-102 cl2 p-b-15">
								Price
							</div>

							<ul>
								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04 filter-link-active">
										All
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										$0.00 - $50.00
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										$50.00 - $100.00
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										$100.00 - $150.00
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										$150.00 - $200.00
									</a>
								</li>

								<li className="p-b-6">
									<a href="#" className="filter-link stext-106 trans-04">
										$200.00+
									</a>
								</li>
							</ul>
						</div>

						<div className="filter-col3 p-r-15 p-b-27">
							<div className="mtext-102 cl2 p-b-15">
								Color
							</div>

							<ul>
								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color:'#222'}}>
										<i className="zmdi zmdi-circle"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04">
										Black
									</a>
								</li>

								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color:'#4272d7'}}>
										<i className="zmdi zmdi-circle"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04 filter-link-active">
										Blue
									</a>
								</li>

								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color: "#b3b3b3"}}>
										<i className="zmdi zmdi-circle"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04">
										Grey
									</a>
								</li>

								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color: "#00ad5f;"}} >
										<i className="zmdi zmdi-circle"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04">
										Green
									</a>
								</li>

								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color: "#fa4251;"}}>
										<i className="zmdi zmdi-circle"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04">
										Red
									</a>
								</li>

								<li className="p-b-6">
									<span className="fs-15 lh-12 m-r-6" style={{color: "#aaa;"}} >
										<i className="zmdi zmdi-circle-o"></i>
									</span>

									<a href="#" className="filter-link stext-106 trans-04">
										White
									</a>
								</li>
							</ul>
						</div>

						<div className="filter-col4 p-b-27">
							<div className="mtext-102 cl2 p-b-15">
								Tags
							</div>

							<div className="flex-w p-t-4 m-r--5">
								<a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Fashion
								</a>

								<a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Lifestyle
								</a>

								<a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Denim
								</a>

								<a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Streetstyle
								</a>

								<a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Crafts
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row isotope-grid">
				{itemList}
			</div>

			
			<div className="flex-c-m flex-w w-full p-t-45">
				<a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
					Load More
				</a>
			</div>
		</div>
	</section>

            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);