import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style = {{objectFit: "contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
                        <form className="d-flex">
                            <input className="form-control bg-dark me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-transparent text-black font-weight-bold bg-warning" type="submit" >Search</button>
                        </form>
                    </div>



                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=2490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: 'brightness(80%)' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: 'brightness(80%)' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1681904451993-1f253902a818?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: 'brightness(80%)' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: 'brightness(80%)' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
