import React from 'react';
import './BodyChatbot.css';

export default function BodyChatbot({ mensajes }){

    return(

        <div className="container-fluid bodyChatbot" id="bodyChatbot">

            <div className="bodyChatbot__mensajes">

                {
                    mensajes.length > 0 &&
                        mensajes.map(value =>{
                            return(
                                <div className={`${value.isUser ? "mensajesUsuario" : "mensajesBot"}`}>

                                    <p className="mensajesUsuario__text">
                                        {value.text}
                                    </p>

                                </div>
                            )
                        })
                }

            </div>

        </div>
    )
}