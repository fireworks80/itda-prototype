import { Switch, Route } from 'react-router-dom';

import GreetingPage from './pages/GreetingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={GreetingPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <Route
        exat
        path={['/home', '/about', '/myAccount', '/question', '/questionDetail', '/posts', '/edit']}
        component={MainPage}
      />
    </Switch>
  );
}

export default App;
