import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BeeDetail from './components/BeeDetail/BeeDetail';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import { useState } from 'react';
import { getUser } from './services/users';
import BeeForm from './components/BeeForm/BeeForm';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="app">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bees" component={Home} />
          <Route exact path="/bees/:id" component={BeeDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/profile">
            <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} />
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/beeform/:id">
            <BeeForm currentUser={currentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
