import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Home from './components/Home'
import States from './components/States'
import StateDetails from './components/StateDetails'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path='/states/:id' exact render={()=><StateDetails/>}/>
          <Route path='/states' exact render={()=><States/>}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
