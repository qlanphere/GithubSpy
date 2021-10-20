import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import Header from './components/Header';
import Body from './components/Body';
import { Context } from './components/Context';

function App() {

  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <Context.Provider value = {{username, setUsername}}>
      <Header />
      <Body />
      </Context.Provider>
    </div>
  );
}

export default App;
