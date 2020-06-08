import React, { Component } from 'react';
import image from '../../assets/images/swedish.png';
import { Route, Link} from 'react-router-dom';
class Footer extends Component{
    constructor(props){
        super(props);

        this.state = {
           
        };
    }

    componentDidMount(){
        
    }

    

    render(){

        return(

        <footer class="bg3 p-t-75 p-b-32" style={{background:`url(${image}) no-repeat`}}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            Categories
                        </h4>

                        <ul>
                            <li class="p-b-10">
                                <Link to="/shop/new" class="stext-107 cl7 hov-cl1 trans-04">
                                   New
                                </Link>
                            </li>

                            <li class="p-b-10">
                                <Link to="/shop/bottoms" class="stext-107 cl7 hov-cl1 trans-04">
                                    Bottom
                                </Link>
                            </li>

                            <li class="p-b-10">
                                <Link to="/shops/tops" class="stext-107 cl7 hov-cl1 trans-04">
                                    Tops
                                </Link>
                            </li>

                            <li class="p-b-10">
                                <Link href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Collections
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-lg-3 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            Help
                        </h4>

                        <ul>
                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Track Order
                                </a>
                            </li>

                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Returns 
                                </a>
                            </li>

                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Shipping
                                </a>
                            </li>

                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-lg-3 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            GET IN TOUCH
                        </h4>

                        <p class="stext-107 cl7 size-201">
                            Any questions? Let us know in store
                        </p>

                        <div class="p-t-27">
                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-facebook"></i>
                            </a>

                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-instagram"></i>
                            </a>

                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            Newsletter
                        </h4>

                        <form>
                            <div class="wrap-input1 w-full p-b-4">
                                <input class="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com"/>
                                <div class="focus-input1 trans-04"></div>
                            </div>

                            <div class="p-t-18">
                                <button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="p-t-40">
                    

                    <p class="stext-107 cl6 txt-center">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This site is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a target="_blank" href="https://www.linkedin.com/in/olufekosamuel" target="_blank">Samuel Olufeko</a>
                      

                    </p>
                </div>
            </div>
        </footer>

    )
}

}

export default Footer;