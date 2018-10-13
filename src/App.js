import React, { Component } from 'react'
import { observable, autorun, action, decorate, computed } from 'mobx'
import { observer } from 'mobx-react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  count = 0
  isDivisibleByTwo = false

  reaction = autorun(() => {
    console.log('count value changed, new count: ', this.count)
  })

  increment = () => {
    this.count++
  }

  decrement = () => {
    this.count--
  }

  get divideByTwo() {
    return this.count / 2
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3> {this.isDivisibleByTwo ? 'is divisible by 2' : ''}</h3>
          <img src={logo} className="App-logo" alt="logo" />
          {this.count} / 2 = {this.divideByTwo}
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default decorate(observer(App), {
  count: observable,
  isDivisibleByTwo: observable,
  increment: action,
  decrement: action,
  divideByTwo: computed
})
