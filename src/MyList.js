import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  
  constructor(props){
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList (e) {
    console.log('clear')
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange (e) {
    this.setState({
    newItem: e.target.value
    })
  }

  addItem = e =>{
    e.preventDefault();
    const newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    this.setState({
      todoItemArray: newArray,
      newItem: ''
    })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems} 
        </ul>
        <button onClick= {(e) => this.clearList(e)}>Finished the list!</button>
        < br/>
      <form onSubmit={this.handleFormEdit}>
        <input type="text" name="body" onChange={ e => this.setState({ newItem: e.target.value })} value={this.state.newItem} />
        <button onClick={(e) => this.addItem(e)}> Add more </ button>
        </form>
      
      </div>
    )
  }
}

export default MyList