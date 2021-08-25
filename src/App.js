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
import CartProvider from './CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Bienvenido a SNKRS" />
            </Route>
            <Route exact path="/category/:categoryID">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:productID">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart" exact component={Cart} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
