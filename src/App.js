import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BeeDetail from './views/BeeDetail/BeeDetail';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import Auth from './views/Auth/Auth';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bees" component={Home} />
          <Route exact path="/bees/:id" component={BeeDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
