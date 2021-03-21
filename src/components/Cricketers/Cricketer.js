import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import './Cricketer.css';

const Cricketer = (props) => {
    const {image, name, country, salary, position} = props.player;
    return (
        <div className='cricketers'>
            <div>
                <img src={image} alt=""/>
            </div>
            <div className='cricketer-detail'>
                <h4>{name}</h4>
                <p><small>Position: {position}</small></p>
                <br/>
                <p><small>Country: {country}</small></p>
                <h4>Salary: ${salary}</h4>
                <button className='add-button' onClick={() => props.handleAddPlayer(props.player)}>
                     <FontAwesomeIcon icon={faHandPointRight} />  Add to Team
                </button>
            </div>
        </div>
    );
};

export default Cricketer;