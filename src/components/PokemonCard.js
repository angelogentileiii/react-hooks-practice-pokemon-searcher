import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon, sprites }) {
  const [spriteImage, setSpriteImage] = useState(true);

  const { name, hp } = pokemon;
  const { front, back } = sprites;
  // console.log(sprites.front)

  function handleImgClick() {
    setSpriteImage(!spriteImage)
  }

   const spriteDisplay = spriteImage ? front : back;


  return (
    <Card>
      <div>
        <div className="image">
          <img src={spriteDisplay} alt={name} onClick={handleImgClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
