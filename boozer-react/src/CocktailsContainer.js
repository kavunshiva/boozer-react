import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import CocktailDetail from './CocktailDetail'

export default class CocktailsContainer extends Component{
  constructor(){
    super()
    this.state = {
      cocktails: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/cocktails`)
    .then(res => res.json())
    .then(cocktails => {
      this.setState({
        cocktails: cocktails
      })
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Some delicious cocktails</h3>
            <ul>
              {this.state.cocktails.map(cocktail => <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)}
            </ul>
          </div>
          <div className="col-md-8">
            <Route path="/cocktails/:id" render={(routerProps) => {
                const id = routerProps.match.params.id
                const cocktail = this.state.cocktails.find( cocktail => cocktail.id === parseInt(id) )
                if (!cocktail){
                  return null
                }
                else {
                  return <CocktailDetail cocktail={cocktail} />
                }
              }
            } />
          </div>
        </div>
      </div>
    )
  }
}
