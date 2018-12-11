
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Message from './components/Message';
import Homepage from './components/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages: []
        
    };
}

async componentDidMount() {
    const messages = (await axios.get('https://morning-falls-3769.herokuapp.com/api/messages')).data;
    this.setState({
        messages,
    });
}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/messages/:messageId' component={Message} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
