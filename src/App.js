import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <TodoList/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
