import React from 'react'
import './WhatsAppIcon.css'

export default function WhatsAppIcon(){

    function handleClick(){

        window.open('https://wa.me/5539892233', '_blank');
    }

    return(

        <button className="whatsAppContacto" onClick={handleClick}>

            <i className="fa-brands fa-whatsapp iconWhatsAppContacto"></i>

        </button>
    )
}