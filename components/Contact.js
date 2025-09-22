import { IconLocationMarker, IconPhone, IconMail } from './icons/Icons.js';

const { createElement: h } = React;

function ContactInfoItem({ icon, title, children }) {
  return h(
    'div',
    { className: 'flex items-start' },
    h(icon, { className: 'h-7 w-7 text-blue-600 mr-4 mt-1 flex-shrink-0' }),
    h(
      'div',
      null,
      h('h3', { className: 'text-lg font-bold text-gray-900' }, title),
      h('div', { className: 'text-gray-600' }, ...children)
    )
  );
}

function Contact() {
  const contact = {
    name: 'Eduardo Varela Arrieta',
    address: ['Urb. Veranda', 'Mz 1203 Villa 29', 'Guayaquil, 090102', 'Ecuador'],
    phone: '+593 99 797 4735',
    phoneLink: 'tel:+593997974735',
    email: 'contacto@evti360.com',
    emailLink: 'mailto:contacto@evti360.com',
  };

  return h(
    'section',
    { id: 'contacto', className: 'py-20 bg-gray-50' },
    h(
      'div',
      { className: 'container mx-auto px-6' },
      h(
        'div',
        { className: 'text-center mb-12' },
        h('h2', { className: 'text-3xl md:text-4xl font-extrabold text-gray-900' }, 'Contáctanos'),
        h('p', { className: 'mt-4 text-lg text-gray-600 max-w-2xl mx-auto' }, 'Estamos aquí para ayudarte. Contáctanos a través de los siguientes canales.')
      ),
      h(
        'div',
        { className: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12' },
        // Left Column: Contact Details
        h(
          'div',
          { className: 'bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col justify-center' },
          h('h3', { className: 'text-2xl font-bold text-gray-900 mb-2' }, 'Información de Contacto'),
          h('p', { className: 'text-gray-600 mb-8' }, 'Ponte en contacto con nuestro equipo para cualquier consulta.'),
          h(
            'div',
            { className: 'space-y-6' },
            h(ContactInfoItem, { icon: IconLocationMarker, title: 'Dirección' }, 
              [
                h('p', { key: 'name' }, contact.name),
                ...contact.address.map((line, i) => h('p', { key: i }, line)),
              ]
            ),
            h(ContactInfoItem, { icon: IconPhone, title: 'Teléfono' }, 
              [
                h('a', { href: contact.phoneLink, className: 'hover:text-blue-600 transition' }, contact.phone),
              ]
            ),
            h(ContactInfoItem, { icon: IconMail, title: 'Correo Electrónico' }, 
              [
                h('a', { href: contact.emailLink, className: 'hover:text-blue-600 transition' }, contact.email),
              ]
            )
          )
        ),
        // Right Column: Map
        h(
          'div',
          { className: 'overflow-hidden rounded-lg shadow-md border border-gray-200' },
           h('iframe', {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.200140221377!2d-79.91000638524495!3d-2.071887998492419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d1370b5555555%3A0x6b49b3802e079713!2sUrb.%20Veranda!5e0!3m2!1sen!2sus",
            width: "100%",
            height: "100%",
            style: { border: 0, minHeight: '450px' },
            allowFullScreen: "",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            title: "Ubicación de EVTI360 en Google Maps"
          })
        )
      )
    )
  );
}

export default Contact;
