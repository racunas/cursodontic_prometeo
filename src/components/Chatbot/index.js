import React from 'react';
import './Chatbot.css';
import HeaderChatbot from './../HeaderChatbot';
import BodyChatbot from './../BodyChatbot';
import FooterChatbot from './../FooterChatbot';


export default function Chatbot(){

    const [mensajes, setMensajes] = React.useState([])

    const setInitialMessages = () =>{
        let messages = [
            {
                text: "Que tal, como estas?",
                isUser: true
            },
            {
                text: "Bien y tu que tal?",
                isUser: false
            }
        ]
        setMensajes(messages)
    }

    const onSubmitMensaje = (e) =>{
        e.preventDefault()
        let form = new FormData(e.target)
        let object = Object.fromEntries(form)
        let mensaje = {
            text: object.duda_usuario,
            isUser: true
        }
        setMensajes([...mensajes, mensaje])
        document.getElementById("duda_usuario").value = ""
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => document.getElementById('bodyChatbot').scrollIntoView(false), 100)
    }

    const getMessagePrometeo = () =>{
        if(mensajes.length === 0){
            return;
        }

        if(mensajes[mensajes.length - 1].isUser){
            setTimeout(()=>{
                let mensaje = {
                    text: "Va, saca",
                    isUser: false
                }
                
                setMensajes([...mensajes, mensaje])
                // document.getElementById('bodyChatbot').scrollIntoView(false)
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(() => document.getElementById('bodyChatbot').scrollIntoView(false), 100)
                
            }, 2500)

        }
    }

    React.useEffect(setInitialMessages, [])

    React.useEffect(getMessagePrometeo, [mensajes])

    return(

        <React.Fragment>

            <HeaderChatbot />

            <div className="scrollBodyChatbot">

                <BodyChatbot 
                    mensajes={mensajes}
                />

            </div>

            <FooterChatbot 
                onSubmitMensaje={onSubmitMensaje}
            />

        </React.Fragment>

    )
}