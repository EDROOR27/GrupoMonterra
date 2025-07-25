document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements with error handling
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const questionList = document.querySelector('.chatbot-questions .question-list');
    const questionListWrapper = document.querySelector('.question-list-wrapper');

    // Check if elements exist
    if (!chatbotToggle || !chatbotWindow || !chatbotClose || !chatbotMessages || !questionList || !questionListWrapper) {
        console.error('Chatbot elements not found in DOM. Check class names and HTML structure.');
        return;
    }

    const responses = [
        {
            question: '¿Qué es Grupo Monterra?',
            answer: 'Grupo Monterra es la primera firma en Tlaxcala especializada en asesoría financiera bursátil, ofreciendo educación y orientación personalizada para jóvenes, emprendedores y pequeñas empresas.'
        },
        {
            question: '¿Qué servicios ofrece Grupo Monterra?',
            answer: 'Ofrecemos asesoría bursátil personalizada, talleres de educación financiera, simuladores de inversión digitales y consultoría para pequeñas empresas, todo diseñado para principiantes.'
        },
        {
            question: '¿Quiénes pueden beneficiarse de los servicios de Grupo Monterra?',
            answer: 'Nuestros servicios son ideales para jóvenes de 18 a 30 años, emprendedores y pequeñas empresas en Tlaxcala que quieran aprender a invertir o mejorar su salud financiera.'
        },
        {
            question: '¿En qué se diferencia Grupo Monterra de bancos u otros asesores financieros?',
            answer: 'A diferencia de bancos o grandes firmas, nos especializamos en principiantes, ofreciendo educación desde cero, asesoría accesible y un enfoque local para Tlaxcala.'
        },
        {
            question: '¿Qué es la bolsa de valores y cómo puedo empezar a invertir?',
            answer: 'La bolsa de valores es donde se compran y venden acciones. Te guiamos desde cero, explicándote cómo funciona, evaluando tu perfil de riesgo y sugiriéndote opciones de inversión personalizadas.'
        },
        {
            question: '¿Necesito mucho dinero para invertir con Grupo Monterra?',
            answer: '¡No! Puedes empezar con poco dinero. Ofrecemos planes accesibles y te enseñamos a invertir con cantidades pequeñas, haciendo la inversión inclusiva.'
        },
        {
            question: '¿Cómo puedo aprender a invertir si no tengo experiencia?',
            answer: 'Ofrecemos talleres para principiantes, cursos en línea y asesoría personalizada para que aprendas a invertir paso a paso, sin importar tu nivel de conocimiento.'
        },
        {
            question: '¿Qué es un perfil de riesgo y por qué es importante?',
            answer: 'Un perfil de riesgo evalúa tus metas financieras y tolerancia al riesgo. Lo usamos para recomendarte inversiones que se ajusten a tus necesidades y nivel de comodidad.'
        },
        {
            question: '¿Qué planes de membresía ofrece Grupo Monterra?',
            answer: 'Ofrecemos planes mensuales o por sesión para individuos, suscripciones premium con alertas de mercado y paquetes para emprendedores o empresas, todos a precios accesibles.'
        },
        {
            question: '¿Qué incluye una suscripción con Grupo Monterra?',
            answer: 'Con una suscripción, obtienes acceso a simuladores de inversión, asesoría personalizada continua, alertas de mercado y contenido educativo exclusivo.'
        },
        {
            question: '¿Las pequeñas empresas pueden recibir asesoría de Grupo Monterra?',
            answer: 'Sí, ofrecemos asesoría para pequeñas empresas, incluyendo análisis financiero, estrategias de inversión y planes de retiro para empleados, adaptados a tus necesidades.'
        },
        {
            question: '¿Es Grupo Monterra una empresa regulada y segura?',
            answer: 'Sí, operamos bajo el Artículo 225 de la Ley del Mercado de Valores y nuestros asesores están certificados por AMIB Figura 3, garantizando seguridad y profesionalismo.'
        },
        {
            question: '¿Cómo aseguran que mis inversiones sean seguras?',
            answer: 'Evaluamos tu perfil de riesgo, usamos plataformas digitales seguras y monitoreamos tus inversiones para garantizar decisiones informadas y seguras.'
        },
        {
            question: '¿Quiénes son los asesores de Grupo Monterra?',
            answer: 'Nuestros asesores son graduados en Ingeniería Financiera de la Universidad Politécnica de Tlaxcala, certificados por AMIB Figura 3, con experiencia en inversiones y educación financiera.'
        },
        {
            question: '¿Cómo puedo unirme a sus talleres o eventos?',
            answer: 'Regístrate en nuestra página web o síguenos en Instagram y TikTok para conocer las fechas de nuestros talleres gratuitos en universidades y en línea.'
        },
        {
            question: '¿Puedo recibir asesoría financiera en línea?',
            answer: 'Sí, ofrecemos asesorías en línea y simuladores de inversión para que accedas a nuestros servicios desde cualquier parte de Tlaxcala, incluso zonas rurales.'
        },
        {
            question: '¿Cómo puedo contactar a Grupo Monterra para más información?',
            answer: 'Contáctanos a través del formulario en nuestra página web, por correo o en nuestras redes sociales (Instagram y Facebook) para una atención personalizada.'
        },
        {
            question: '¿Por qué Grupo Monterra se enfoca en Tlaxcala?',
            answer: 'Tlaxcala carece de asesoría bursátil especializada, y estamos aquí para llenar ese vacío, empoderando a jóvenes y empresas locales con educación financiera.'
        },
        {
            question: '¿Cómo apoya Grupo Monterra a la comunidad de Tlaxcala?',
            answer: 'Creamos empleos para asesores certificados, promovemos la educación financiera y hacemos que la inversión sea accesible para jóvenes, mujeres y pequeños empresarios.'
        }
    ];

    // Populate question list
    responses.forEach((response, index) => {
        const li = document.createElement('li');
        li.textContent = response.question;
        li.className = 'question-item';
        li.addEventListener('click', () => {
            appendMessage('user', response.question);
            setTimeout(() => appendMessage('bot', response.answer), 500);
        });
        questionList.appendChild(li);
    });

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
        try {
            const isHidden = chatbotWindow.style.display === 'none' || !chatbotWindow.style.display;
            chatbotWindow.style.display = isHidden ? 'block' : 'none';
            console.log('Chatbot toggled:', chatbotWindow.style.display);
        } catch (error) {
            console.error('Error toggling chatbot window:', error);
        }
    });

    // Close chatbot window
    chatbotClose.addEventListener('click', () => {
        try {
            chatbotWindow.style.display = 'none';
            console.log('Chatbot closed');
        } catch (error) {
            console.error('Error closing chatbot window:', error);
        }
    });

    // Swipe functionality
    let isDragging = false;
    let startX, scrollLeft;

    questionListWrapper.addEventListener('mousedown', startDragging);
    questionListWrapper.addEventListener('touchstart', startDragging);

    questionListWrapper.addEventListener('mousemove', drag);
    questionListWrapper.addEventListener('touchmove', drag);

    questionListWrapper.addEventListener('mouseup', stopDragging);
    questionListWrapper.addEventListener('touchend', stopDragging);
    questionListWrapper.addEventListener('mouseleave', stopDragging);

    function startDragging(e) {
        isDragging = true;
        startX = (e.type === 'touchstart' ? e.touches[0].pageX : e.pageX) - questionListWrapper.offsetLeft;
        scrollLeft = questionListWrapper.scrollLeft;
        questionListWrapper.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = (e.type === 'touchmove' ? e.touches[0].pageX : e.pageX) - questionListWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        questionListWrapper.scrollLeft = scrollLeft - walk;
    }

    function stopDragging() {
        isDragging = false;
        questionListWrapper.style.cursor = 'grab';
    }

    // Welcome message
    appendMessage('bot', '¡Hola! Bienvenido a Grupo Monterra. Desliza o selecciona una pregunta de la lista para obtener más información.');

    function appendMessage(sender, text) {
        try {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chatbot-message ${sender}`;
            messageDiv.innerHTML = text;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        } catch (error) {
            console.error('Error appending message:', error);
        }
    }
});