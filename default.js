"use strict"

var cookieoptions = {
    title: 'Usamos cookies en este sitio 🍪',
    description: `Haz clic en "Aceptar" para permitirnos usar cookies para personalizar
                  este sitio. Personaliza tus preferencias en tu Configuración de cookies 
                  o haz clic en "Rechazar" si no deseas que podamos usar cookies para este fin. 
                  Obtén más información en nuestra  <a href="/cookies">Política de cookies</a>`,
    buttons: {
        acceptAll: 'Aceptar',
        acceptSelected: 'Aceptar Cookies',
        reject: 'Rechazar',
        showSettings: 'Ajustes de las Cookies',
        hideSettings: 'Esconder',
    },
    categories: {
        essentials: {
            label: "Esenciales",
            description: `Las cookies esenciales son necesarias para que el uso
                      de este sitio web sea posible, tales como el chat, la 
                      protección antispam de google,                         
                      y otros servicios de seguridad.`,
            checked: true,
            mandatory: true,
        },
        analytics: {
            label: "Analíticas",
            description: `Las cookies de análisis nos permiten analizar sus visitas y
                   acciones en nuestros sitios web para poder ofrecerle una información más
                   relevante y una mejor experiencia.`,
            checked: true,
            mandatory: false,
        },
    },
};


