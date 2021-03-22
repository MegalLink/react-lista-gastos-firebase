import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import WebFont from "webfontloader";
import Contenedor from "./elementos/Contenedor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditarGasto from "./componentes/EditarGasto";
import GastosPorCategoria from "./componentes/GastosPorCategoria";
import ListaGastos from "./componentes/ListaGastos";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import { Helmet } from "react-helmet";
import Fondo from "./elementos/Fondo";
import { AuthProvider } from "./contextos/AuthContext";
import RutaPrivada from "./componentes/RutaPrivada";
WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"]
  }
});

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>App Gastos</title>
      <link
        rel="shotcut icon"
        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-yjabd&psig=AOvVaw2c3WIuP5kamUr4os319uw8&ust=1615241684964000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjHv6man-8CFQAAAAAdAAAAABAD"
        type="image/png"
      />
    </Helmet>
    <AuthProvider>
      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <RutaPrivada path="/lista">
              <ListaGastos />
            </RutaPrivada>
            <RutaPrivada path="/categorias">
              <GastosPorCategoria />
            </RutaPrivada>
            <RutaPrivada path="/editar/:id">
              <EditarGasto />
            </RutaPrivada>
            <RutaPrivada path="/">
              <App />
            </RutaPrivada>
          </Switch>
        </Contenedor>
        <Fondo />
      </BrowserRouter>
    </AuthProvider>
  </>,
  document.getElementById("root")
);
