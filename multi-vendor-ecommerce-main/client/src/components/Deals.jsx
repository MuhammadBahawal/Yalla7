import React, { useEffect, useState } from 'react';
import './Deals.css';

const Deals = () => {
    const [topRated, setTopRated] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        'https://via.placeholder.com/450x240.png?text=Image+1', 
        'https://via.placeholder.com/450x240.png?text=Image+2', 
        'https://via.placeholder.com/450x240.png?text=Image+3'
    ];
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/data.json');
                const data = await response.json();

                setTopRated(data.products.filter(product => product.status === "recommended"));
                setBestSellers(data.products.filter(product => product.status === "active"));
                setNewArrivals(data.products); // Fetch all for new arrivals
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="deals-container">
            <div className="row">
                {/* Top Rated Section */}
                <div className="col1">
                    <div className="col-head">
                        <h1>More reasons to shop</h1>
                    </div>
                    <div className="deal-cards">
                        {topRated.slice(0, 4).map((item, index) => (
                            <div className="dealcard" key={item.id}>
                                <div className="card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="category">{item.category}</div>
                                <div className="heading">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Best Sellers Section */}
                <div className="col2">
                    <div className="col-head">
                        <h1>Mega Deals</h1>
                    </div>
                    <div className="deal-cards">
                        {bestSellers.slice(0, 4).map((item, index) => (
                            <div className="col2-card" key={item.id}>
                                <div className="col2-card-img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="col2-card-info">
                                    <p className="col2-text-title">{item.title}</p>
                                    <p className="text-body">{item.category}</p>
                                </div>
                                <div className="col2-card-footer">
                                    <span className="col2-text-title">AED{item.price.toFixed(2)}</span>
                                    <div className="col2-card-button">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Arrivals Section */}
                <div className="col3">
                    <div className="col-head">
                        <h1>In Focus</h1>
                    </div>
                    <div className="col3-cards">
                        {newArrivals.slice(0, 1).map((item, index) => (
                            <div className="col3-card" key={item.id}>
                                <div className="col3-card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="col3-card-content">
                                    <div className="col3-category">{item.category}</div>
                                    <div className="col3-heading">
                                        {item.title}
                                        <div className="author">By <span className="name">Brand</span> 4 days ago</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Carousel Section */}
                        <div className="carousel">
                            <div className="carousel-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                                {carouselImages.map((image, index) => (
                                    <img src={image} alt={`Carousel Image ${index + 1}`} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
