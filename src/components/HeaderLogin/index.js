import React from "react";
import './HeaderLogin.css';

import logoCursodontic from './../../assets/img/logoBlanco.png';

export default function HeaderLogin(){

    return(

        <div className="container-fluid headerLogin">

            <div className="container">

                <img src={logoCursodontic} className="headerLogin__logo" />

            </div>

        </div>
    )
}