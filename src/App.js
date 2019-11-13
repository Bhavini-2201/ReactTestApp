import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
             <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    
      </div>
     );
  }
}


export class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn : false}
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.handleLoggedOut = this.handleLoggedOut.bind(this);
  }

  handleLoggedIn() {
    this.setState({isLoggedIn: true});
  }

  handleLoggedOut() {
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn =  this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLoggedOut} />;
    } else {
      button = <LoginButton onClick={this.handleLoggedIn} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );  
    }
  }
    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }
    
    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>;
    }
    
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }
    
    function LoginButton(props) {
      return (
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }
    
    function LogoutButton(props) {
      return (
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }


