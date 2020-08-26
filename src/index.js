import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';
var toDos = ["Look at pet pictures", "Scratch Mia's Belly", "Throw Pierre's ball"]
ReactDOM.render(
  <MyList theList ={toDos} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

