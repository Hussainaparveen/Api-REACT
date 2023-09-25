// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[data, setData]=useState([]);

  useEffect(function (){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))

  }, []);
  return (
    <div className="App">
      {data.map(function(value) {
        return(
          <div>
            <p>User ID:{value.userId}</p>
            <p>ID:{value.id}</p>
            <p>Title:{value.title}</p>
            <p>Completed:{value.completed?'true':'false'}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
