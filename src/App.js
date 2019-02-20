import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
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
