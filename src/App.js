import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('');
  console.log(search)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setMonsters(users))
  }, [])

  const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h1>Hello from stars</h1>
      <SearchBox placeholder="Search People" handleChange={(e) => setSearch(e.target.value)} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
