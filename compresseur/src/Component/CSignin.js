import React from 'react';

const CSignin = () => {
    return (
        
          <form className="formStyle">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pseudo</label>
    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Log In</button>
</form>  
        
    );
};

export default CSignin;