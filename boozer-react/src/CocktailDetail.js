import React from 'react'

export default function CocktailDetail(props){
  return (
    <div>
      <h2>{props.cocktail.name}</h2>
      <h5>Description</h5>
      {props.cocktail.description}
      <h5>Instructions</h5>
      {props.cocktail.instructions}
      <h5>Proportions</h5>
      <ul className="list-unstyled">
        {props.cocktail.proportions.map( proportion => <li key={proportion.id}>{proportion.ingredient_name}: {proportion.amount}</li>)}
      </ul>
    </div>
  )
}
