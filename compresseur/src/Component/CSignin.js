import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CSignin = () => {
  let history = useHistory()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
    }
  }, [])



  const signinPost = async (e) => {
    e.preventDefault();
    try {
      console.log('je suis ici');
      const response = await axios.post("http://localhost:8001/auth/login", { username, password })
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        history.push("/")
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (

    <form className="formStyle" onSubmit={signinPost}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pseudo</label>
        <input class="form-control" id="exampleInputPseudo" aria-describedby="pseudo" onChange={(e) => setUsername(e.target.value)} />
        <div id="textUser" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" class="btn btn-primary">Log in</button>
    </form>
  );
};

export default CSignin;