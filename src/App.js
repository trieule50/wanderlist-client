import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import States from './components/States';
import StateDetails from './components/StateDetails';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path='/states/:id' exact render={()=><StateDetails/>}/>
          <Route path='/states' exact render={()=><States/>}/>
          <Route path='/about' exact render={()=><About/>}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
