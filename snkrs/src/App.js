import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a SNKRS" />
    </div>
  );
}

export default App;
