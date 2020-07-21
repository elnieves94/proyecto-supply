import React from 'react';
import "../CSS/nosotros.css"
import rpt from "../Imagenes/rpt.jfif"

const Nosotros = () => {
    return(
        <div className="boxNosotrosGeneral">
            <div className="d-flex justify-content-center">
                <div className="d-flex boxNosotros">
                    <div className="boxNostrosUno"></div>
                    <div className="d-flex flex-column justify-content-between boxNostrosUno boxNosotrosTitle">
                        <div><h2>¿Quiénes somos?</h2></div>
                        <div className="boxNosotrosTexto">
                            <h5>somos una red de</h5>
                            <h3>profesionales</h3>
                            <h5>en cadena de suministro y logística</h5>
                        </div>
                    </div>
                    <div className="boxNostrosUno"></div>
                </div>
            </div>

            <div className="container boxTeam">
            <h2 className="boxTeamTitle">Meet the Team</h2>
                <div className="d-flex">
                    <div className="prueba">
                        <img src={rpt}></img>
                        <div>
                            <h5>Rafael Perafán</h5>
                            <h6>CEO</h6>
                            Acerca de<br/>
                            Especialista en logística.<br/>
                            Enfocado en la mejora de mi país. 
                        </div>
                    </div>
                    <div className="pruebaDos"></div>
                    <div className="prueba"></div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;