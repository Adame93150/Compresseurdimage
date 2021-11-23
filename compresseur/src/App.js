import React from "react";
<<<<<<< HEAD
import {BrowserRouter,Switch,Route,} from "react-router-dom";
=======
//importaton de la librairie react router dom
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
//importation des differents components
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
import Accueil from "./Pages/Accueil";
import Compressor from "./Pages/Compressor";
import Contact from "./Pages/Contact";

import Notfound from "./Pages/Notfound";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import mesImages from "./Pages/MesImages";






const App = () => {


  return (
    //creation des routes
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