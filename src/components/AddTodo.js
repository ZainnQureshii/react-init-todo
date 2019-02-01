import React, { Component } from 'react'

export class TodoHeader extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })


  
  onSubmit = (e) => (
    e.preventDefault(),
    this.props.addTodo(this.state.title)

  )

  render() {
    return (
      <form onSubmit={this.onSubmit} style={addTodo}>
        <h1>Add Your Todo</h1>
        <input  style={todoInput}
                type='text'
                name='title'
                placeholder='Add Todo...'
                value={this.state.title}
                onChange={this.onChange} />

        {/* <input
          style={btnAddTodo}
          onClick={this.props.countno}

        /> */}
        

        <button style={btnAddTodo} type='submit' onClick={this.props.countno}>CLICK Submit</button>

        {/* <h1>{this.props.count}</h1> */}

        <hr style={{marginTop: '20px'}} />
      </form>
    )
  }
}

const addTodo = {
  color: '#444',
  textAlign: 'center'
}


const btnAddTodo = {
  backgroundColor: '#888',
  border: '1px solid #666',
  borderRadius: '5px',
  padding: '10px 15px',
  marginLeft: '10px',
  color: '#fff',
  fontWeight: '500',
  fontSize: '14px',
  cursor: 'pointer',

}

const todoInput = {
  backgroundColor: 'whitesmoke',
  width: '300px',
  padding: '10px 10px',
  fontSize: '14px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#444',
}


export default TodoHeader
