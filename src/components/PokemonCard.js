import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);
  const image = isFront ? pokemon.sprites.front : pokemon.sprites.back;

  return (
    <Card>
      <div>
        <div className="image">
          <img src = { image } alt={ pokemon.name } onClick = {() => setIsFront(!isFront)} />
        </div>
        <div className="content">
          <div className="header">{ pokemon.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { pokemon.hp } hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
