import React, { useState, useEffect } from 'react';
import room from '../img/room.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './reserva'
import CreateFormReserva from './reserva';


const CreateCard = ({img,name,alt,url1}) => {
    return (  
        <div className="col">
            <div className="card">
            <div style={{ backgroundImage: `url(${img})` }} className="card-img-top" id="card-paint" alt={alt} onClick={() => window.location.href = url1}></div>
                <div className="card-body" data-bs-toggle="modal" href="#ReservToggle">
                    <h5 className="card-title">{name}</h5>
                    <btn className='btn'>reserva</btn>
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
                        <div className="modal fade" id="ReservToggle" aria-hidden="true" aria-labelledby="ModalToggleLabel" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="ModalToggleLabel">Reserva</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <CreateFormReserva/>
                                    </div>
                                </div>
                        </div>
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
