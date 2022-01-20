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
import UserDetail from './views/UserDetail/UserDetail';
import ProtectedRoute from './utils/ProtectedRoute';
import Edit from './views/Edit/Edit';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="app">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bees" component={Home} />
          <Route exact path="/bees/:id">
            <BeeDetail currentUser={currentUser} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <ProtectedRoute exact path="/profile" currentUser={currentUser}>
            <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} />
          </ProtectedRoute>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/beeform/:id">
            <BeeForm currentUser={currentUser} />
          </Route>
          <Route exact path="/profile/:id" component={UserDetail} />
          <ProtectedRoute exact path="/edit/:id" currentUser={currentUser}>
            <Edit currentUser={currentUser} />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
