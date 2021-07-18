import React, {useEffect, useState} from "react";
import {Header} from "./components";
import {Home, Card} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";

function App({}) {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, [])
  /* fetch('http://localhost:3000/db.json')
     .then((response) => response.json())
     .then((json) => {
       setPizzas(json.pizzas);
     })
 }, [])*/
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path={'/'} render={() => <Home items={pizzas}/>}/>
          <Route exact path={'/card'} component={Card}/>
        </div>
      </div>
    </div>
  );
}

export default App;
