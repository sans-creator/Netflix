import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQ3MmUyMTI5ZDkyNWY1M2MwODUyOTJiOGQxZWY2MiIsIm5iZiI6MTc1MzAyOTIwNy4yMTksInN1YiI6IjY4N2QxYTU3NTg1NTk3YzEwMGY3NmEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T1j1Oc30jA3EQv7cu_CKSaQ6mJieE8otTThipKPXpDw'
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const current = cardsRef.current;
    current.addEventListener('wheel', handleWheel);
    return () => current.removeEventListener('wheel', handleWheel);
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path || card.poster_path}`}
              alt={card.original_title || card.name}
            />
            <p>{card.original_title || card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
