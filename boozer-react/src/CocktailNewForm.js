import React, { Component } from 'react'

export default class CocktailNewForm extends Component{
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      instructions: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render(){
    //Add input for proportions. Needs to be dynamic and add an x number of ingredients with attributes name and amount. Should state track the number of ingredients?
    return (
      <div className="container">
        <form onSubmit = {this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange} />
          <input type="submit" />
          </form>
      </div>
    )
  }
}
