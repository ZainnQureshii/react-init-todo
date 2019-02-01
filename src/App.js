import React, { Component } from 'react';
import todosData from './components/todos';
import TodoItems from './components/TodoItems';
import Header from './components/PageHeader';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: todosData,
      isLoading: true,
      count: todosData.length,
      newTitle: ''
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    } , 5000)
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteTodo = (id) => {
    
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
    
  }

  countId = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
      
    })

    
  }



  addTodo = (title) => {
    const newTodo = {
      id: this.state.count,
      title: title,
      completed: false

    }

    this.setState({ todos: [...this.state.todos, newTodo] });

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name)
  }
  

  updateTitle = (title, id) => {
    console.log(title)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.title = title
        }

        return todo
      })
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    
  }

  editFuncion = (id) => {
    console.log(id)
    this.updateTitle(this.state.newTitle, id)
  }

 

  editMain = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.title =  <form onSubmit={this.onSubmit}>
                          <input  onChange={this.onChange}
                                  name='newTitle'
                                  type="text"
                                  style={todoInput}
                          />
                          <button style={btnAddTodo}
                                  type='button'
                                  onClick={this.editFuncion.bind(this, id)}>
                                  
                                  Update
                          </button>
                        </form>
        }

        return todo
      })

    })
  }
    // const newT = {
    //   title: 'Zain'
    // }
    // this.setState(prevState => {
    //   return{
    //   }
    // })
  


  render() {

    const todoList = this.state.todos.map(todo => 
                        <TodoItems 
                          key={todo.id}
                          todos={todo}
                          markComplete={this.markComplete}
                          deleteTodo={this.deleteTodo}
                          edit={this.state.todos.title}
                          editMain={this.editMain}
                        />

                      )


    return ( 
      <div>
        <Header />
        <div className="container">
          <AddTodo countno={this.countId} count={this.state.count} addTodo={this.addTodo} />
          
          {this.state.isLoading ? <div className='loading'>Loading...</div> : [todoList] }
          
          
          
        </div>
      </div>
    )
      
    
  }
}


const todoInput = {
  marginTop: '10px',
  backgroundColor: 'whitesmoke',
  width: '150px',
  padding: '8px 8px',
  fontSize: '14px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#444',
}

const btnAddTodo = {
  marginTop: '10px',
  backgroundColor: '#888',
  border: '1px solid #666',
  borderRadius: '5px',
  padding: '8px 12px',
  marginLeft: '10px',
  color: '#fff',
  fontWeight: '500',
  fontSize: '14px',
  cursor: 'pointer',

}

export default App;