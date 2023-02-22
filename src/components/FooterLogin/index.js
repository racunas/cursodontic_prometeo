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

                            <p className="footerText__link">
                                
                                Como cuidamos tu privacidad

                            </p>

                        </Link>

                        <p className="datosCursodontic__text">

                            - Copyright © 2020-2023 Cursodontic México. SAPI

                        </p>

                    </div>

                    <div className="datosCursodontic__condiciones">

                        <Link to="/" className="datosCursodontic__link">

                            <p className="footerText__link">

                                Privacidad

                            </p>

                        </Link>

                        <Link to="/" className="datosCursodontic__link">

                            <p className="footerText__link">

                                - Condiciones

                            </p>

                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}