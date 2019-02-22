import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

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
                <Route path='/write' exact component={Write}></Route>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
