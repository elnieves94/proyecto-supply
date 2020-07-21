import React from 'react';
import BarraSuperior from './Componentes/BarraSuperior';
import FooterGeneral from './Componentes/FooterGeneral';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <BarraSuperior />
      <FooterGeneral />
    </div>
  );
}

export default App;
