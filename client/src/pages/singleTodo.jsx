import React, { Component } from 'react';

class SingleTodo extends Component {
  state = {};
  render() {
    //issitraukiam is params tuo pav kaip nurodyta Route
    return <h1>Single Todo - {this.props.match.params.id}</h1>;
  }
}

export default SingleTodo;
