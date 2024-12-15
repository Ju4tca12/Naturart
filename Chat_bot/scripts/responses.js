var chatState = "initial";
function getBotResponse(input) {
    //rock paper scissors
    
    if (input == "alla") {
        return "www.google.com";
           } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hola") {

        return "Gracias",
        
        location.href =('http://127.0.0.1:5500/indexaca.html');
 
    
    } else if (input == "Gracias") {
        return "Esperamos tenerte pronto de nuevo";
    }
   
    // Simple responses
    if (chatState === "initial") {
        if (input === "menu") {
            chatState = "menu";
            return "Selecciona una opción: <br> a) Productos <br> b) Servicios <br> c) Tienda <br> d) Academia e) Preguntas frecuentes";
        } else {
            return "No puedo entenderte. Por favor, escribe 'menu' para comenzar.";
        }
    } else if (chatState === "menu") {
        if (input === "a") {
            chatState = "product";
            return "Selecciona un producto: <br> 1) Páginas Web <br> 2) Apps Mobile <br> 3) Domótica";
        } else if (input === "b") {
            chatState = "service";
            return "Selecciona un servicio: <br> 1) Servicio Técnico <br> 2) Seguridad Informática <br> 3) Domótica";
        } else if (input === "volver") {
            chatState = "initial";
            return "Has vuelto al menú principal. Escribe 'menu' para comenzar nuevamente.";
        } else {
            return "Opción inválida. Por favor, selecciona una opción válida o escribe 'volver' para regresar al menú principal.";
        }
    } else if (chatState === "product") {
        if (input === "1") {
            return "Nuestros costos para Páginas Web: <br> 1) Página Sencilla $550.000 <br> 2) Página Media $750.000 <br> 3) Página Premium $850.000 <br> 4) Landing Page $350.000 <br> 5) Kasten $125.000";
        } else if (input === "volver") {
            chatState = "menu";
            return "Has vuelto al menú de productos. Selecciona una opción: <br> 1) Páginas Web <br> 2) Apps Mobile <br> 3) Domótica";
        } else {
            return "Opción inválida. Por favor, selecciona una opción válida o escribe 'volver' para regresar al menú de productos.";
        }
    } else if (chatState === "service") {
        if (input === "1") {
            return "Nuestros costos para Servicio Técnico: <br> 1) Formateo Windows $49.990 <br> 2) Formateo MacOS $69.990 <br> 3) Instalación de Programas $19.990";
        } else if (input === "volver") {
            chatState = "menu";
            return "Has vuelto al menú de servicios. Selecciona una opción: <br> 1) Servicio Técnico <br> 2) Seguridad Informática <br> 3) Domótica";
        } else {
            return "Opción inválida. Por favor, selecciona una opción válida o escribe 'volver' para regresar al menú de servicios.";
        }
    } else {
        return "No puedo entenderte";
    }
}





