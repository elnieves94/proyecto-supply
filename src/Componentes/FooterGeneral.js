import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/footergeneral.css';
import fbLogo from '../Imagenes/facebookIcon.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const FooterGeneral = () => {
    return(
        <div className="d-flex contenedorFooter">
            <div className="boxFooter"></div>
            <div className="boxFooter d-flex flex-column">
            <h6>Términos y Condiciones</h6>
                <Router>
                    <Link to="/termycond">Términos y Condiciones de "página"</Link>
                    <Link to="/privacidad">Política de Privacidad</Link>
                </Router>
            </div>
            <div className="boxFooter"></div>
            <div className="boxFooter d-flex flex-column">
                <h6>Ayuda</h6>
                <Router>
                    <Link to="/faq">Preguntas Frecuentes</Link>
                    <Link to="/contacto">Contacto</Link>
                </Router>
            </div>
            <div className="boxFooter">
                <h6>Síguenos</h6>
                <a href="https://www.facebook.com/syhconsultores1" target="_blank"><img src={fbLogo} className="fbLogo"></img></a>
            </div>
        </div>
    );
}

export default FooterGeneral;