import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Accueil from "./Pages/Accueil";

import Compressor from "./Pages/Compressor";
import Contact from "./Pages/Contact";
import Convertisseur from "./Pages/Convertisseur";
import Notfound from "./Pages/Notfound";





const App = () => {
  return (
    
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/c-convertisseur" exact component={Convertisseur} />
                <Route path="/c-compressor" exact component={Compressor}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
    
  );
};

export default App;