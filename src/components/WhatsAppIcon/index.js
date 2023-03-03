import React from 'react'
import './WhatsAppIcon.css'

export default function WhatsAppIcon(){

    function handleClick(){

        window.open('https://wa.me/5551723692', '_blank');
    }

    return(

        <div className="whatsAppContacto" onClick={handleClick}>

            <i className="fa-brands fa-whatsapp iconWhatsAppContacto"></i>

        </div>
    )
}