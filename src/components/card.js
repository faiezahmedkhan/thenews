import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <>
                <main>
                    <h1 className='text-center mt-4'>Top Headline</h1>
                    <div
                        className="container-fluid bg-trasparent my-4 p-3"
                        style={{ position: "position" }}
                    >
                        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-primary"
                                            >ASUS Rog</span
                                            >
                                            <span className="float-end price-hp">12354.00&euro;</span>
                                        </div>
                                        <h5 className="card-title">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                            quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum
                                            ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam
                                            sequi.
                                        </h5>
                                        <div className="text-center my-4">
                                            <a href="#" className="btn btn-warning">Check offer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success"
                                            >12354.00&euro;</span
                                            >
                                            <span className="float-end"><a href="#">Example</a></span>
                                        </div>
                                        <h5 className="card-title">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                            quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum
                                            ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam
                                            sequi.
                                        </h5>
                                        <div className="d-grid gap-2 my-4">
                                            <a href="#" className="btn btn-warning">Check offer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="label-top shadow-sm">Asus Rog</div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success"
                                            >12354.00&euro;</span
                                            >
                                            <span className="float-end"
                                            ><a href="#" className="small text-muted">Reviews</a></span
                                            >
                                        </div>
                                        <h5 className="card-title">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                            quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum
                                            ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam
                                            sequi.
                                        </h5>
                                        <div className="text-center my-4">
                                            <a href="#" className="btn btn-warning">Check offer</a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="label-top shadow-sm">DELL</div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start price-hp">12354.00&euro;</span>
                                            <span className="float-end"
                                            ><a className="text-muted small" href="#">Reviews</a></span
                                            >
                                        </div>
                                        <h5 className="card-title">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                            quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum
                                            ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam
                                            sequi.
                                        </h5>
                                        <div className="text-center my-4">
                                            <a href="#" className="btn btn-warning">Check offer</a>
                                        </div>
                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>



            </>
        )
    }
}
