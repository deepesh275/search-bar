import './App.css';
import JsonData from './Data.json'
import React, { useState } from 'react';
function App() {

  const [inputvalue, setInputvalue] = useState("")
  return (
    <div className="App">
      <input value={inputvalue} onChange={(event) => setInputvalue(event.target.value)} className='searchbar' type="text" placeholder='Search' />
      {JsonData.filter(data => {

        if (inputvalue === "") {
          return data
        } else if (data.first_name.toLowerCase() === inputvalue.toLowerCase()) {
          return data
        }
      }).map((val, key) => (
        <div key={key}> <p>
          {val.first_name}
        </p> </div>
      ))}

    </div>
  );
}

export default App;
