import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BeeDetail from './components/BeeDetail/BeeDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={BeeDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
