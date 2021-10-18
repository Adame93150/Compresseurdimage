import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Accueil from "./Pages/Accueil";

import Compressor from "./Pages/Compressor";
import Notfound from "./Pages/Notfound";





const App = () => {
  return (
    
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/c-compressor" exact component={Compressor}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
    
  );
};

export default App;