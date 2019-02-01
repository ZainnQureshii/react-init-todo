import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div style={header}>
        <h1>Todo List</h1>
      </div>
    )
  }
}

const header = {
  textAlign: 'center',
  backgroundColor: '#888',
  color: '#fff',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default Header
