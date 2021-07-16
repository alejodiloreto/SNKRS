import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a SNKRS" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
