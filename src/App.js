import React, { Component, Fragment } from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
