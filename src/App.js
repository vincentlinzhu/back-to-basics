// import logo from './logo.svg';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import DisplayName from './components/DisplayName';
import MovieList from './components/MovieList';
import Speedometer from './components/Speedometer';
import SimpleForm from './components/SimpleForm';

function App() {
  // const name = "truly Mittal"
  // // const isOnline = true;

  // function handleClick(e) {
  //   // console.log('123')
  //   console.log(e.target.innerHTML);
  // }

  // const movies = [
  //   {
  //       id: 1,
  //       name: 'Captain America',
  //   }, 
  //   {
  //       id: 2,
  //       name: 'Iron Man',
  //   },
  //   {
  //       id: 3,
  //       name: 'Black Panther',
  //   },
  //   {
  //       id: 4,
  //       name: 'Avengers Endgame',
  //   },
  //   {
  //       id: 5,
  //       name: 'Captain Marvel',
  //   },  
  // ];

  // const [isOnline, setIsOnline] = useState(true)

  // if (isOnline) {
  //   return <h1>User is Online</h1>;
  // }

  // const [users, setUsers] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {
  //     // console.log(response);
  //     setUsers(response.data);
  //   })
  //   .catch(error => {
  //     setError(error.message);
  //   });
  // }, []);

  // const paragraphStyle = { color: 'black', backgroundColor: 'greenyellow'};

  return (
    <div className="App">
      {/* <h1 style={{color: 'blue'}}>Hello React</h1>
      <p style={paragraphStyle}>Why do we fall? ....</p>
      <p style={paragraphStyle}>So we can learn to pick ourselves back up.</p>
      <p style={paragraphStyle}>- Chistopher Nolan</p> */}
      {/* <SimpleForm/> */}
      {/* {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
      {error && <h4>Error is: { error }</h4>} */}
      {/* { isOnline ? <Speedometer /> : <DisplayName/>}
      <button onClick={() => setIsOnline(!isOnline)}>isOnline is { isOnline.toString() }</button> */}
      {/* <MovieList movies={ movies } name={'truly mittal'} onClick={handleClick}/> */}
       {/* <h1>Hello React!!!</h1>
       <h2>{name}</h2>
       <h3>{isOnline ? 'Online' : 'Offline'}</h3>
       <DisplayName/>
      <button onClick={() => console.log('button clicked')}>Click Me</button>
       <button onClick={handleClick} onMouseEnter={handleClick}>Click Me</button> */}
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hello from class Component</h1>;
//   }
// }

export default App;
