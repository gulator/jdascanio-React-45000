import logo1 from './logo.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo1} className="wine-logo" alt="logo" />}
        <NavBar />
      </header>
      <main className='App-Main'>
        <ItemListContainer greeting="Listado de Productos" />
      </main>
    </div>
  );
}

export default App;
