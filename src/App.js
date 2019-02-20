import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/' component={Header}></Route>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
