import React, { useState, useEffect } from 'react';

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      {characters.map(character => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h4>{character.name}</h4>
          <h5>{character.status}</h5>
        </div>
      ))}
      <br />
    </div>
  );
};

export default CharacterPage;