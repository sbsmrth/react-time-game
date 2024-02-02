import { useState, useRef } from 'react';

export default function Player() {
  const playerNameInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    const { value } = playerNameInput.current;
    if (value) {
      setPlayerName(value);
      playerNameInput.current.value = '';
    }
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerNameInput} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
