import React, { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({ pokemon }) {
  const { id, name, hp, sprites } = pokemon
  const { front, back } = sprites
  const [isFront, setIsFront] = useState(true)

  function handleImageClick() {
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img
            src={isFront ? front : back}
            alt="oh no!"
            onClick={handleImageClick}
          />
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
  )
}

export default PokemonCard
