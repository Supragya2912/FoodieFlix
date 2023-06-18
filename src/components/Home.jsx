import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';

const Home = () => {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');

    const getFoodCategory = async () => {

        let response = await fetch('http://localhost:5000/foodie/getData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        })

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCategory(response[1]);
    };

    useEffect(() => {
        getFoodCategory();
    }, []);

    return (
        <>
            <Navbar />
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <style>
                    {`
          
          
          .search-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }
          
          .search-overlay .input-group {
            max-width: 300px;
          }
          
          .search-overlay .form-control {
            border-radius: 20px 0 0 20px;
          }
          
          .search-overlay .btn {
            background-color: grey; 
            color: black;
            border-radius: 0 20px 20px 0;
          }
          
          .carousel-item img {
            max-height: 500px;
            object-fit: cover;
          }
        `}
                </style>

                <div className="search-overlay">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-button" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        <button className="btn btn-primary" type="button" id="search-button">Search</button>
                    </div>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/30×30/?burger" className="d-block w-100 blur-image" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/30×30/?chowmein" className="d-block w-100 blur-image" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/30×30/?pasta" className="d-block w-100 blur-image" alt="Image 3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            <div className="container">
                {
                    foodCategory !== []
                        ? foodCategory.map((data) => {

                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>  
                                    <hr />
                                    {
                                        foodItem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                            .map(
                                                filterItems => {
                                                    return (
                                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                                            <Card
                                                                foodName={filterItems.name}
                                                                options={filterItems.options[0]}
                                                                imgSrc={filterItems.img}
                                                                description={filterItems.description}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            )

                                    }
                                </div>

                            )
                        }) : null
                }
                <Card />
            </div>
        </>
    )
};

export default Home;