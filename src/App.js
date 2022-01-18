import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BeeDetail from './views/BeeDetail/BeeDetail';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import Auth from './views/Auth/Auth';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={BeeDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
