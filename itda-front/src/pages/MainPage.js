import { Switch, Route } from 'react-router-dom';

import Header from '../components/common/Header';
import IndexPage from './IndexPage';
import WritePage from './WritePage';
import PostDetailPage from './PostDetailPage';
import About from '../components/About';
import SubPage from '../pages/SubPage';
import Sidebar from '../components/sidebar';
import Footer from '../components/common/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='l-container l-max-width l-center'>
        <Switch>
          <Route exact path='/home' component={IndexPage} />
          <Route exact path='/about' component={About} />
          <Route exact path={['/posts', '/posts/:category', '/myAccount']} component={() => <SubPage />} />
          <Route exact path={['/question/:category?']} component={WritePage} />
          <Route exact path='/questionDetail/:id' component={PostDetailPage} />
        </Switch>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
