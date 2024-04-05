import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';



function App() {
  const [error, setError] = useState(null);

  const [post, setPost] = useState({
    firstname: '',
    email: '',
    phonenumber: '',
    password: ''
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/', post);
      console.log(response.data);
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
      setError('Error occurred while saving data.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logIn-form">
          <form onSubmit={handleSubmit}>
            <input
              name="firstname"
              className="title"
              type="text"
              placeholder="First name ..."
              onChange={handleInput}
            />
            <input
              name="email"
              className="title"
              type="text"
              placeholder="Email ..."
              onChange={handleInput}
            />
            <input
              name="phonenumber"
              className="title"
              type="text"
              placeholder="Phone number ..."
              onChange={handleInput}
            />
            <input
              name="password"
              className="title"
              type="text"
              placeholder="Password ..."
              onChange={handleInput}
            />
            <button type="submit">Submit</button>
          </form>
          {error && <div className="error">{error.message}</div>}
        </div>
      </header>
    </div>
  );
}

export default App;