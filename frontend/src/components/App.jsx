import React from 'react';
import Home from './home/Home';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';
import {ViewProvider} from '../context/ViewContext'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <ViewProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={PageNotFound} status={404} />
          </Switch>
          <Footer />
        </ViewProvider>
      </Router>
    </div>
  );
}

export default App;
