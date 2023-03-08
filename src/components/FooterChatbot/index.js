import React from 'react';
import './FooterChatbot.css';

export default function FooterChatbot({onSubmitMensaje}){

    return(

        <div className="container-fluid footerChatbot shadow-top">

            <div className="container">

                <form className="footerChatbot__dudasUsuarios" onSubmit={onSubmitMensaje}>

                    <input
                    type="text"
                    name="duda_usuario"
                    id="duda_usuario"
                    placeholder="Consulta las dudas que tengas de Cursodontic"
                    className="dudasUsuarios__input" />

                    <button className="dudasUsuario__button">

                        <i class="fa-solid fa-share"></i>

                    </button>

                </form>

            </div>

        </div>

    )
}