import React from 'react';
import "./LoginCursodontic.css";
import { Link } from 'react-router-dom';

export default function LoginCursodontic(){

    return (

    <div className="container-fluid loginCursodontic">

        <div className="container">

            <div className="loginCursodontic__cardLogin">

                <div className="cardLogin__header">

                    <span className="cardLoginHeader__text">REGISTRATE PARA CONTINUAR</span>

                </div>

                <div className="cardLogin__body">

                    <div className="cardLoginBody__metodosInicioSesion">

                        <button type="button" className="metodosInicioSesion btnSesion__correo">

                            <i class="fa-solid fa-envelope"></i>

                            Continuar con mi Correo

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__google">

                            <i class="fa-brands fa-google"></i>

                            Continuar con Google

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__facebook">

                            <i class="fa-brands fa-facebook-f"></i>

                            Continuar con Facebook

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__wallet">

                            <i class="fa-solid fa-wallet"></i>

                            Conectar Wallet

                        </button>

                        <Link to="/" className="metodosInicioSesion__link">

                            <p className="metodosInicioSesion__text">

                                ¿Que es una wallet?

                            </p>

                        </Link>

                    </div>

                    <div className="cardLoginBody__infoFormulario">

                        <span className="infoFormulario__textInicio">O inicia sesión con tu email y contraseña</span>

                        <form action="/login.php" method="GET" className="infoFormulario__formularioLoginCursodontic">

                            <div className="formularioLoginCursodontic">

                                <input type="text" name="user_mail" id="user_mail" placeholder="Correo electronico" className="formularioLoginCursodontic__input" required />

                            </div>

                            <div className="formularioLoginCursodontic">

                                <input type="password" name="user_password" id="password" placeholder="Contraseña" className="formularioLoginCursodontic__input" required />

                            </div>

                            <Link to="/" className="formularioLoginCursodontic__link">

                                <p className="formularioLoginCursodontic__text">¿Olvidaste tu contraseña?</p>

                            </Link>

                            <button className="formularioLoginCursodontic__button">

                            Entrar

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
    
    )
}