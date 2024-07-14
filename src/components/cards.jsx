import React, { useState, useEffect } from 'react';
import room from '../img/room.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateCard = ({img,name,alt,url1}) => {
    return (  
        <div className="col">
            <div className="card">
            <div style={{ backgroundImage: `url(${img})` }} className="card-img-top" id="card-paint" alt={alt} onClick={() => window.location.href = url1}></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
}

const CreateCardGroup = () => {
    const [mode, setMode] = useState();

    useEffect(() => {
        const handleWidth = () => {
            if (window.innerWidth <= 426) {
                setMode(
                    <div id="card-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 1" alt="skull" url1={null} />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 2" alt="remix" url1={null} />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 3" alt="ghost" url1={null} />
                                </div>
                            </div>
                            {/* Add more carousel items as needed */}
                        </div>
                        <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                );
            } else {
                setMode(
                    <div id="card-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 1" alt="skull" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 2" alt="remix" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 3" alt="ghost" url1={null} />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 4" alt="journey" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 5" alt="hermit" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 6" alt="texture" url1={null} />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                    <CreateCard img={room} name="lore ipsum 7" alt="battle" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 8" alt="bunny" url1={null} />
                                    <CreateCard img={room} name="lore ipsum 9" alt="mummy" url1={null} />
                                </div>
                            </div>
                            {/* Add more carousel items as needed */}
                        </div>
                        <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                );
            }
        };

        handleWidth();
        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);

    return mode;
}


export default CreateCardGroup;
