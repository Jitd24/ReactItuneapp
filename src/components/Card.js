import React from 'react';
import '../css/card.css';
import img from '../Image/music.jpg'


const Card = ({ posts }) => {
  const date = new Date(posts.releaseDate);
  let dateString = `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`

  return (
      <div data-testid="card" className="card">
          <img data-testid="img" src={img}  className="card-img" alt="music" />
          <h2 className="card-name">{posts.artistName}</h2>
          <h3 className="track-name">{posts.trackName}</h3>
          <div className="card-info">
              <span><strong>Release:</strong> {dateString}</span>
              <span><strong>Genre:</strong> {posts.primaryGenreName}</span>
              <span><strong>$</strong>{posts.trackPrice}</span>
          </div>
      </div>
  )
}

export default Card;