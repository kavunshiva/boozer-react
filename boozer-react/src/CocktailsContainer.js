import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import CocktailDetail from './CocktailDetail'
import CocktailNewForm from './CocktailNewForm'

export default class CocktailsContainer extends Component{
  constructor(){
    super()
    this.state = {
      cocktails: []
    }
    this.createCocktail = this.createCocktail.bind(this)
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

  createCocktail(cocktail){
   fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        cocktail: cocktail
      })
    }).then(response => response.json() )
      .then(cocktail => this.setState((previousState) => {
        return {
          cocktails: [...previousState.cocktails, cocktail]
        }
      })
    )

  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Some delicious cocktails</h3>
            <ul className="list-unstyled">
              {this.state.cocktails.map(cocktail => <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)}
            </ul>
          </div>
          <div className="col-md-8">
          <Switch>
            <Route path = "/cocktails/new" render = {() => <CocktailNewForm onSubmit={this.createCocktail} />} />
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
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
