import React, { Component } from 'react'

export class TodoItems extends Component {
  constructor(){
    super();
    this.state = {
      h1: ''
    }
  }
  // componentWillReceiveProps(){
  //   console.log('Props Received');
  // }



  // editTodo = () => {
  //   this.props.editMain(this.props.todos.title)
  // }

  render() {

    const { id, title, completed } = this.props.todos;
    
    return (
      <div className="todoItems">
        <input 
          onChange={this.props.markComplete.bind(this, id)} 
          checked={completed} type="checkbox" /> {' '}
        
        <h3 
          style={{textDecoration: completed ? 'line-through' : 'none'}}>
          <span className="task">Task Name: </span> 
          {title}
        </h3>

        {'  '} <h3>{this.state.h1}</h3> {'  '}

        <button onClick={this.props.deleteTodo.bind(this, id)} style={deleteTodo}>x</button>

        <button onClick={this.props.editMain.bind(this, id)} style={deleteTodo}>Edit</button>
       
      </div>
    )
  }
}

const deleteTodo = {
  backgroundColor: '#797979',
  padding: '4px 10px',
  fontSize: '18px',
  color: '#fff',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '50%',
  marginLeft: '10px',
  display: 'flex',
  justifyContent: 'center'

}


export default TodoItems
