import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Accueil from "./Pages/Accueil";

import Compressor from "./Pages/Compressor";
import Contact from "./Pages/Contact";

import Notfound from "./Pages/Notfound";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import mesImages from "./Pages/MesImages";






const App = () => {


  return (
    
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Accueil} />        
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