import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Home from './components/Home'
import States from './components/States'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path='/states' render={()=><States/>}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
