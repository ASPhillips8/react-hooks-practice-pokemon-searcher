import React, { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm() {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    const formData = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    }
    console.log(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={(event) => setHp(event.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(event) => setFrontUrl(event.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(event) => setBackUrl(event.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
