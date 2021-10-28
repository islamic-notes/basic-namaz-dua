// the homepage/ main page of the app
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Layouts/Header';
import HomePage from './Pages/HomePage';
import ContentPage from './Pages/ContentPage';
import '../Styles/libs/libs.scss';
import '../Styles/app.scss';


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/contents/:path">
            <ContentPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
