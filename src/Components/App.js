// the homepage/ main page of the app
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Layouts/Header';
import Home from './Layouts/Home';
import Detail from './Layouts/Detail';
import Pages from './Layouts/Pages';
import '../Styles/antd.css';
import '../Styles/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/menu/page/:pageId">
            <Pages />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
