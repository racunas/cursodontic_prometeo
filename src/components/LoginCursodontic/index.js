import React, {useState} from 'react';
import "./LoginCursodontic.css";
import { Link } from 'react-router-dom';

export default function LoginCursodontic(){

    let [userEmail, setUserEmail] = React.useState("")
    let [userPassword, setUserPassword] = React.useState("")

    function onSubmitLoginCursodontic(event){

        event.preventDefault()

        // const handleUserEmailChange = (event) => {
        //     setUserEmail(event.target.value)
        // }

        // const handleUserPasswordChange = (event) => {
        //     setUserPassword(event.target.value)
        // }
        

    }

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

                            <i className="fa-solid fa-envelope"></i>

                            Continuar con mi Correo

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__google">

                            <i className="fa-brands fa-google"></i>

                            Continuar con Google

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__facebook">

                            <i className="fa-brands fa-facebook-f"></i>

                            Continuar con Facebook

                        </button>

                        <button type="button" className="metodosInicioSesion btnSesion__wallet">

                            <i className="fa-solid fa-wallet"></i>

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

                        <form action="/login.php" method="GET" className="infoFormulario__formularioLoginCursodontic" onSubmit={(event) => onSubmitLoginCursodontic(event)}>

                            <div className="formularioLoginCursodontic">

                                <input 
                                type="email" 
                                name="user_mail" 
                                // value={userEmail}
                                // onChange={handleUserEmailChange}
                                id="userEmail" 
                                placeholder="Correo electronico" className="formularioLoginCursodontic__input"
                                required />

                            </div>

                            <div className="formularioLoginCursodontic">

                                <input 
                                type="password"
                                name="userPassword" 
                                // value={userPassword}
                                // onChange={handleUserPasswordChange} 
                                id="userPassword"
                                placeholder="Contraseña" className="formularioLoginCursodontic__input" 
                                required />

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