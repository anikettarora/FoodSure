import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'

//since it is javascript we need to send style as key value pairs and instead of dash notation we follow camelCase
export default function Home() {

    const [search, setSearch] = useState('');

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5500/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });


        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        //console.log(response[0], response[1])
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            <div> <Navbar /> </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control bg-dark me-2 text-white" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                                {/* {<button className="btn btn-outline-transparent text-black font-weight-bold bg-warning" type="submit" >Search</button>} */}
                            </div>
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
            <div className='container '>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem !== []
                                        ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                                    <Card foodName={filterItems.name}
                                                        options={filterItems.options[0]}
                                                        imgsrc={filterItems.img}
                                                    > </Card>
                                                </div>
                                            )
                                        }
                                        ) : <div>No such data found</div>}
                                </div>
                            )
                        })
                        : "hahahaha"
                }

            </div>
            <div> <Footer /> </div>
        </div>
    )
}
