import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>All Albums</h1>
      </header>
      <main>
        <AlbumsListContainer/>
      </main>
    </div>
    </Provider>
  );
}

export default App;
