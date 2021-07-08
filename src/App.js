import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a SNKRS" />
    </div>
  );
}

export default App;
