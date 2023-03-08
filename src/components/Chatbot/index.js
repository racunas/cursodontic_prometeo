import React from 'react';
import './Chatbot.css';
import HeaderChatbot from './../HeaderChatbot';
import BodyChatbot from './../BodyChatbot';
import FooterChatbot from './../FooterChatbot';

export default function Chatbot(){

    const [mensajes, setMensajes] = React.useState([])

    const setInitialMessages = () =>{
        let messages = [
            // {
            //     text: "Que tal, como estas?",
            //     isUser: true
            // },
            // {
            //     text: "Bien y tu que tal?",
            //     isUser: false
            // }
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
        document.getElementById('duda_usuario').disabled = true;
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => document.getElementById('bodyChatbot').scrollIntoView(false), 100)
    }

    const getMessagePrometeo = async () =>{
        if(mensajes.length === 0){
            let mensaje = {
                text: "Hola 🤖 Soy Prometeo, un asistente inteligente profesional creado por Cursodontic para ayudar a los dentistas con sus dudas generales en la consulta. ¿En qué puedo ayudarte?",
                isUser: false
            }
            setMensajes([...mensajes, mensaje])
            return;
        }

        if(mensajes[mensajes.length - 1].isUser){
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: process.env.REACT_APP_API,
            });
            const openai = new OpenAIApi(configuration);

            let historyMessages = [{role: "system", content: `Eres un asistente inteligente profesional llamado Prometeo creado por Cursodontic, una empresa de cursos online para dentistas y técnicos dentales en México, que ayudará a los dentistas con sus dudas generales en la consulta. Tienes que responder siempre información precisa y relevante para el doctor, sin salirte del tema que se está hablando. No puedes responder preguntas que no tengan que ver con el área de la odontología, salud oral, estomatología. No digas que la información debe consultarse con un médico, ya que el que está leyendo la información es un médico dental. Responde en máximo 100 caracteres y si es necesario, puedes extenderlo. Recuerda que quien te pregunta no es un paciente, es un doctor, médico, dentista, profesional de la salud.`},
            {role: "user", content: `Soy cursodontic, a continuación te escribiré cuáles son los cursos que ofrecemos:
            Desarrollo de estrategias a través de un cambio de mentalidad
            Dosificación, aplicación y conservación de impresiones con alginato
            Manejo adecuado de yesos dentales
            Iniciación a la toxina botulínica
            7 tips de marketing para tu negocio dental
            Impuestos para odontólogos
            Introducción a las habilidades directivas
            La nueva era de emprendedores dentales
            Capacitación para recepcionistas de clínicas y consultorios
            Perfeccionamiento en la técnica de montaje de porcelana para principiantes
            Protectores dentales-bucales personalizados
            Sedación consciente con óxido nitroso
            Resolviendo extracciones complicadas paso a paso
            e.Max para principiantes
            Hacer incrustaciones y coronas de cerómero paso a paso
            Cómo integrar criptomonedas en tu negocio dental
            Montaje sobre zirconia
            ¿Cómo atraer más pacientes a tu consultorio dental?
            Tratamiento de pacientes clase II
            Marketing digital básico para el consultorio dental ideal
            Estrategias para una cobranza exitosa
            Shock Anafiláctico
            La cuarta revolución industrial dental
            Infecciones Odontogénicas
            Prostodoncia total
            ¿Cómo elaborar un contrato de prestación de servicios profesionales?
            Introducción a la fotografía dental
            Introducción a la cirugía guiada
            ¿Cómo identificar a un paciente difícil?
            Introducción a LinkedIn
            Implantes post extracción y regeneración ósea
            Introducción al montaje de porcelana
            Manejo de redes sociales para tu negocio dental
            Toma de impresión básica (Abierta y cerrada)
            Acrilizado de barras sobre implantes (All on four) paso a paso con mufla inteligente
            Carillas de porcelana sobre zirconio
            Farmacología para odontólogos
            Preparación de cavidades e incrustaciones
            Preparación de coronas, carillas y puentes fijos
            Grafeno en la odontología
            Date a conocer en el mundo de LinkedIn
            Documentos médicos legales
            Mi primera campaña de marketing en internet
            Montaje de porcelana avanzado
            Sistemas cerámicos para la restauración en estética dental
            Articulador semiajustable
            Generalidades de la endodoncia
            Emergencias médicas odontológicas
            Medidas de protección y sanidad en el consultorio`,},
            {role: "user", content: `Responde con emojis para darle un toque más divertido a las conversaciones.`},]

            mensajes.forEach(value => {
                let data = {}
                if(value.isUser){
                    data.role = "user"
                } else {
                    data.role = "assistant"
                }

                data.content = value.text;
                historyMessages.push(data);
            })

            console.log({historyMessages})

            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: historyMessages,
                temperature: 0.36,
                max_tokens: 500,
                presence_penalty: 0.3
            });

            let mensaje = {
                text: completion.data.choices[0].message.content,
                isUser: false
            }
            setMensajes([...mensajes, mensaje])

            document.getElementById('duda_usuario').disabled = false;

            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(() => document.getElementById('bodyChatbot').scrollIntoView(false), 100)

        }
    }

    React.useEffect(setInitialMessages, [])

    React.useEffect(()=>{
        getMessagePrometeo()
    }, [mensajes])

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