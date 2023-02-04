import React, { Component } from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';




export default class card extends Component {
    constructor() {
        super();
    }
    
    jQueryCode = () => {
        $(document).ready(function() {
            $("#news-slider").owlCarousel({
                items : 3,
                itemsDesktop:[1199,3],
                itemsDesktopSmall:[980,2],
                itemsMobile : [600,1],
                navigation:true,
                navigationText:["",""],
                pagination:true,
                autoPlay:true
            });
        });
    }
    
    componentDidMount(){
         this.jQueryCode();
      }




    render() {

        return (
            
            <>
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="news-slider" className="owl-carousel">

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/500x300/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/501x301/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/502x302/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/503x303/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/505x305/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>

                                <div className="post-slide">
                                    <div className="post-img">
                                        <img src="https://source.unsplash.com/506x306/?business&q=50" alt="" />
                                        <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                                    </div>
                                    <div className="post-content">
                                        <h3 className="post-title">
                                            <a href="#">Lorem ipsum dolor sit amet.</a>
                                        </h3>
                                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......</p>
                                        <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span>
                                        <a href="#" className="read-more">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
