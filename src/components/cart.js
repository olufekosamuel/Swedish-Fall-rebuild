import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link} from 'react-router-dom';
import img1 from '../assets/images/product-01.jpg';


class Cart extends Component{

    componentDidMount() {

    }

    logout(){
        localStorage.removeItem('current_wallet');
        localStorage.removeItem('userData');
        window.location.href = '/';
    }

    render(){
        let addedItems = this.props.items.length ?
            (this.props.items.map(item=>{
                return(
                    <li class="header-cart-item flex-w flex-t m-b-12">
                        <div class="header-cart-item-img">
                            <img src={item.img} alt="IMG"/>
                        </div>

                        <div class="header-cart-item-txt p-t-8">
                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                {item.name}
                            </a>

                            <span class="header-cart-item-info">
                                {item.quantity} x ${item.price}
                            </span>
                        </div>
                    </li>
                )
            })): <p>Empty</p>
        return( 
            
        <div className={ this.props.show ? 'wrap-header-cart js-panel-cart show-header-cart ' : 'wrap-header-cart js-panel-cart' }>
                <div class="s-full js-hide-cart"></div>

                <div class="header-cart flex-col-l p-l-65 p-r-25">
                    <div class="header-cart-title flex-w flex-sb-m p-b-8">
                        <span class="mtext-103 cl2">
                            Your Cart
                        </span>

                        {this.props.children}
                        
                    </div>
                    
                    <div class="header-cart-content flex-w js-pscroll">
                        <ul class="header-cart-wrapitem w-full">
                            {addedItems}
                        </ul>
                        
                        <div class="w-full">
                            <div class="header-cart-total w-full p-tb-40">
                                Total: ${this.props.total}
                            </div>

                            <div class="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>

                                <Link to="/checkout" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Cart);


