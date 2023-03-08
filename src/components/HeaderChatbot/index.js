import React from 'react';
import './HeaderChatbot.css';

import avatarPrometeo from './../../assets/img/AvatarPrometeo.png'

export default function HeaderChatbot(){

    return(

        <div className="container-fluid headerChatbot sticky-top shadow">

            <div className="container">

                <div className="headerChatbot__infoChatbot">

                    <img src={avatarPrometeo} className="infoChatbot__avatarChatbot" />

                    <div className="infoChatbot__datosChatbot">

                        <span className="datosChatbot__nombreBot">Prometeo</span>

                        <p className="datosChatbot__nombreEmpresa">Chatbot de Cursodontic</p>

                    </div>

                </div>

            </div>

        </div>
    )
}