import React from 'react';
import './PlayerCard.css';

function PlayerCard() {
    const players = [
        {
            fullname: 'Lionel Andrés Messi',
            born: '1987-06-24',
            team: 'Inter Miami',
            image: '/images/messi.jpg',
            
        },
        {
            fullname: 'Cristiano Ronaldo dos Santos Aveiro',
            born: '1985-02-05',
            team: 'Al Nassr',
            image: '/images/ronaldo.jpg',
            
        },
        {
            fullname: 'Rodrygo Goes',
            born: '2001-09-01',
            team: 'Real Madrid',
            image: '/images/rodrigo.jpg',
             
        },
        {
            fullname: 'Erling Braut Haaland',
            born: '2000-07-21',
            team: 'Manchester City',
            image: '/images/haaland.jpg',
            
        },
    ];


    return (
        <div className="player-card">
          <h1>List of Players</h1>
          <ul className="player-list">
            {players.map((player, index) => (
              <li className="player-list-item">
                <img
                  src={player.image}
                  alt={`Image of ${player.fullname} from ${player.team}`}
                  className="player-image"
                />
                <div className="player-info">
                  <div className="player-name">{player.fullname}</div>
                  <div className="player-birthday">
                    <strong>Born:</strong> {player.born}
                  </div>
                  <div className="player-detail player-team">
                    <strong>Team:</strong> {player.team}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
            }
      
export default PlayerCard;
