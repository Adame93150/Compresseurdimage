import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Accueil from "./Pages/Accueil";
import caca from "./Pages/caca";
import Compressor from "./Pages/Compressor";





const App = () => {
  return (
    <div>
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="Compressor" exact component={Compressor}/>
                <Route path="caca" exact component={caca}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;