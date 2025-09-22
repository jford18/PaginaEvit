const { createElement: h } = React;
import { IconWhatsApp } from './icons/Icons.js';

function WhatsAppButton() {
  const phoneNumber = '593997974735';
  const message = 'Hola, me gustaría obtener más información sobre los servicios de EVTI360.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return h(
    'a',
    {
      href: whatsappUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center',
      'aria-label': 'Contactar por WhatsApp'
    },
    h(IconWhatsApp, { className: 'h-8 w-8 text-white', stroke: "none", fill: "currentColor" })
  );
}

export default WhatsAppButton;
