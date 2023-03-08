import React from "react";
import { Link } from "react-router-dom";
import './HeaderLogin.css';

import logoCursodontic from './../../assets/img/logoBlanco.png';

export default function HeaderLogin(){

    return(

        <div className="container-fluid headerLogin">

            <div className="container">

                <div className="">

                    <img src={logoCursodontic} className="headerLogin__logo" />

                    <Link to="/chatbot" className="">

                        <span className="">Chatbot Cursodontic </span>

                    </Link>

                </div>

            </div>

        </div>
    )
}