import {Switch, Route} from 'react-router-dom';
import './index.css';
import {AllMeetupsPage} from "./pages/AllMeetups";
import {NewMeetupPage} from "./pages/NewMeetup";
import {FavoritesPage} from "./pages/Favorites";
import {Layout} from "./components/layout/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={'/'} render={() => <AllMeetupsPage/>}/>
        <Route exact path={'/new-meetup'} render={() => <NewMeetupPage/>}/>
        <Route exact path={'/favorites'} render={() => <FavoritesPage/>}/>
      </Switch>
    </Layout>
  );
}

export default App;
