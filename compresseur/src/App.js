import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Accueil from "./Pages/Accueil";

import Compressor from "./Pages/Compressor";
import Contact from "./Pages/Contact";
import Convertisseur from "./Pages/CompresseurV";
import Notfound from "./Pages/Notfound";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import CompresseurV from "./Pages/CompresseurV";
import mesImages from "./Pages/mesImages";






const App = () => {
  const logout = () => {
    localStorage.removeItem("token")
}
  return (
    
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/c-compresseurV" exact component={CompresseurV} />
                <Route path="/c-compressor" exact component={Compressor}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/m-mesImages" exact component={mesImages}/>
                <Route path="/SignUp" exact component={Signup}/>
                <Route path="/SignIn" exact component={SignIn}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
    
  );
};

export default App;