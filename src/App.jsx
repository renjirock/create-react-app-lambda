import React, { Component } from "react";
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
//import Form from './components/Form';
import Index from "./components/admin";


// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    const login = localStorage.getItem("login");
    return (
      <div className="App">
        {login === null || login === 'true' ? <Navigation/> : ''}
        {login === null ? <Masthead/> : ''}
        {login === 'true' ? <Index/> : ''}
      </div>
    )
  }
}

export default App