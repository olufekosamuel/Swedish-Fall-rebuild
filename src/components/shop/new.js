import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';


import icon1 from '../../assets/images/icons/icon-heart-01.png';
import icon2 from '../../assets/images/icons/icon-heart-02.png';
import { ToastContainer, toast } from 'react-toastify';

class New extends Component{

    componentDidMount() {
        
    }

    
	handleClick = (item)=>{
        this.props.addToCart(item.id);
        toast(item.name+" was added to cart")
	}

    render(){
        
        let itemList = this.props.items.map(item=>{ if(item.category.includes("New")){
			return(
				<div key={item.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img style={{width:'350px',height:'450px'}} src={item.img} alt="IMG-PRODUCT"/>

							<button  onClick={()=>{this.handleClick(item)}} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
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
									<img className="icon-heart1 dis-block trans-04" src={icon1} alt="ICON"/>
									<img className="icon-heart2 dis-block trans-04 ab-t-l" src={icon2} alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			)
        }
        
        })
        
        return(
            <>
			{itemList}
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

export default connect(mapStateToProps,mapDispatchToProps)(New);