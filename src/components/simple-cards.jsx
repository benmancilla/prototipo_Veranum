import React from 'react';
import massage from '../img/massage.jpg';
import breakfast from '../img/breakFAST.jpg';
import dinner from '../img/dinner.jpg';
import bar from '../img/bar.jpg';

const CreateSimpleCards = ({ img }) => {
    return (
        <div className="scard" style={{ backgroundImage: `url(${img})` }}>
            
        </div>
    );
}

const CreateSimpleCardGroup = () => {
    return (
        <React.Fragment>
            <div id="services-container">
                <CreateSimpleCards img={massage}/>
                <CreateSimpleCards img={breakfast}/>
                <CreateSimpleCards img={dinner}/>
                <CreateSimpleCards img={bar}/>
            </div>
        </React.Fragment>
    );
}

export default CreateSimpleCardGroup;