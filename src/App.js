import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  function handleClick(){
    setPeople([])
  }

  return (
    <main>
      <section className="container">
      <h3>{people.length} birthdays today</h3>
        <List details={people}/>
        <button onClick={handleClick}>Clear all</button>
      </section>
    </main>
  )

}

export default App;