
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Message from './components/Message';
import Homepage from './components/Homepage';

class App extends Component {

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
