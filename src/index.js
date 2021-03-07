import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import WebFont from 'webfontloader'
import Contenedor from './elementos/Contenedor';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import EditarGasto from './componentes/EditarGasto'
import GastosPorCategoria from './componentes/GastosPorCategoria'
import ListaGastos from './componentes/ListaGastos'
import Login from './componentes/Login'
import Register from './componentes/Register'

  WebFont.load({
    google: {
      families: ['Work Sans:400,500,700', 'sans-serif']
    }
  });

ReactDOM.render(
  <BrowserRouter>
  <Contenedor>
  <Switch>
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/lista" component={ListaGastos} />
  <Route path="/categorias" component={GastosPorCategoria} />
  <Route path="/editar/:id" component={EditarGasto} />
  <Route path="/" component={App} />
  </Switch>
 
  </Contenedor>
  </BrowserRouter>
  , document.getElementById("root"));
