import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from'axios';

const CSignup = () => {
  let history = useHistory()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
    }
  }, [])
  
  const signupPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/auth/signup", { username, password })
      
      console.log(response);
      if (response.status === 200) {
        setUserCreated(true)
        alert("you are now registred, please login !")
        history.push("/SignIn")
      }
        } catch (error) {
            console.error(error)
        }
    }
    if (userCreated) {
      return ("User created!")
  } else {
  return (
        
        <form className="formStyle" onSubmit={signupPost}>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Pseudo</label>
  <input class="form-control" id="exampleInputPseudo" aria-describedby="pseudo" onChange={(e) => setUsername(e.target.value)}/>
  <div id="textUser" class="form-text"></div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
</div>
<button type="submit" class="btn btn-primary">SignUp</button>
</form>  
      
  );
};
};
export default CSignup;