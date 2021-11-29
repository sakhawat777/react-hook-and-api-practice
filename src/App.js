import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
	useEffect(() => {
    // For Multiple User
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data))
// For Single User
fetch('https://jsonplaceholder.typicode.com/users/1')
.then((res) => res.json())
.then((data) => setSingleUser(data))
// Random User
fetch('https://randomuser.me/api/')
.then((res) => res.json())
.then((data) => setRandomUser(data.results[0]))
	}, []);
	return <div>
    {
      users.map(user => <li>{user.name}</li>)
    }
    <h1>{singleUser.name}</h1>
    <h2>{randomUser.gender}</h2>
    {/* Short-Circuit= && */}
    <h2>{randomUser.name && randomUser.name.title + " " + randomUser.name.first  + " " + randomUser.name.last}</h2>
    {/* Nullable= ? */}
    <h3>{randomUser.name?.title + " " + randomUser.name?.first + " " + randomUser.name?.last}</h3>
   
  </div>;
}

export default App;
