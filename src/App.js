import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact render={()=><div>home</div>}></Route>
                <Route path='/detail' exact render={()=><div>detail</div>}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
