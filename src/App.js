import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a SNKRS" />
          </Route>
          <Route exact path="/category/:categoryID">
            <CategoryFilter />
          </Route>
          <Route exact path="/item/:productID">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
