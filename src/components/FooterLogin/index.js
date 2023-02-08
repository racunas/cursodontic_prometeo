import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLogin.css';

export default function FooterLogin(){

    return(

        <div className="container-fluid footerLogin">

            <div className="container">

                <div className="footerLogin__datosCursodontic">

                    <div className="datosCursodontic__copy">

                        <Link to="/" className="datosCursodontic__link">

                            <span className="footerText__link">
                                
                                Como cuidamos tu privacidad

                            </span>

                        </Link>

                        <span className="datosCursodontic__text">

                            - Copyright © 2020-2023 Cursodontic México. SAPI

                        </span>

                    </div>

                    <div className="datosCursodontic__condiciones">

                        <Link to="/" className="datosCursodontic__link">

                            <span className="footerText__link">

                                Privacidad

                            </span>

                        </Link>

                        <Link to="/" className="datosCursodontic__link">

                            <span className="footerText__link">

                                - Condiciones

                            </span>

                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}