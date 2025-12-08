import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import HelloWorld from './pages/HelloWorld';
import Todos from './pages/Todos';
import NotFound from './pages/NotFound';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={HelloWorld} />
      <Route path="/todos" component={Todos} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default App;
