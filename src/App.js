
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Message from './components/Message';
import Homepage from './components/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages: [],
        message: {},
        filteredMessages: [],
    };
    this.searchbarOnChange = this.searchbarOnChange.bind(this)
  }

async componentDidMount() {
    const messages = (await axios.get('https://morning-falls-3769.herokuapp.com/api/messages')).data;
    this.setState({
        messages, 
        filteredMessages: messages,
    });
  }

searchbarOnChange(e) {
  const input = e.target.value;
  if (input === '') {
    this.setState({
      filteredMessages: this.state.messages
    })
  }
  else {
  const filteredMessages = this.state.messages.filter(message => message.from === input)
  this.setState({
    filteredMessages
  })
  }
}

  
render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => <Homepage messages={this.state.filteredMessages} searchbarOnChange={this.searchbarOnChange} />} />
            <Route path='/message/:messageId' render={props => <Message messages={this.state.messages} {...props}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
