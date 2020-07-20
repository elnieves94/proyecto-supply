import React from 'react';
import logo from '../Imagenes/syhLogoPequeno.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import '../CSS/barrasuperior.css'

const BarraSuperior = () => {
    return(
        <div className="d-flex justify-content-between contenedorBarraSuperior">
            <div>
                <Router>
                    <Link to="/"><img src={logo}/></Link>
                </Router>
            </div>
            <div>
                <Router>
                    <button className="btn btn-link"><Link to="/">Inicio</Link></button>
                    <button className="btn btn-link"><Link to="/nosotros">Nosotros</Link></button>
                    <button className="btn btn-link">
                        <div className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cursos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">
                                    Aduanas
                                </a>
                                <a class="dropdown-item" href="#">
                                    Transporte Nacional
                                </a>
                                <a class="dropdown-item" href="#">
                                    Transporte Internacional
                                </a>
                                <a class="dropdown-item" href="#">
                                    Cadena de Suministro
                                </a>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-link"><Link to="/inscripcion">Inscripción</Link></button>
                </Router>
            </div>
        </div>
    );
}

export default BarraSuperior;