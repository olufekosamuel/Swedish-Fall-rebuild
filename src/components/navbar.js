import React, {Component} from 'react';
import { Route, NavLink, Switch} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
					<NavLink to="/shop/" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" activeClassName="how-active1" data-filter="*">
						All Products
					</NavLink>

					<NavLink to="/shop/new" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" activeClassName="how-active1" data-filter=".women">
						New
					</NavLink>

					<NavLink to="/shop/bottoms" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" activeClassName="how-active1" data-filter=".men">
						Bottoms
					</NavLink>

					<NavLink to="/shop/tops" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" activeClassName="how-active1" data-filter=".bag">
						Tops
					</NavLink>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
						Collections
					</button>

					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
						Vouchers
					</button>
				</div>

        )
    }
}

export default NavBar;