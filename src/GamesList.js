import React from 'react';

export default function GamesList({games}) {
  const emptyMessage = (
    <p>No Games</p>
  );

  const gamesList = (
    <p>gamesList</p>
  );

  return (
    <div>
      {games.length === 0 ? emptyMessage: gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: React.PropTypes.array.isRequired
}