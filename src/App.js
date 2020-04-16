import React from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar'
import CV from './component/CV'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route path="/CV">
          <CV/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
