import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Repo from './components/Repo';

function App() {
  return (
    <div className="App">
      <Header />
      <Repo />
    </div>
  );
}

export default App;
