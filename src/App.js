import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is homepage
      </Route>

      <Route exact path="/Starred">
        This is Starred
      </Route>

      <Route>NOT found page</Route>
    </Switch>
  );
}

export default App;
