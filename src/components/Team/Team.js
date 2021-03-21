import React, { useState } from 'react';
import data from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Cricketer from '../Cricketers/Cricketer';
import './Team.css'

const Team = () => {
    const [players, setPlayers] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) =>{
        console.log('player added', player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="team-container">
            <div className="player-container">

                {
                    players.map(player => <Cricketer 
                        handleAddPlayer = {handleAddPlayer}
                        player={player}
                        ></Cricketer>)
                }

            </div>
            <div className="budget-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Team;