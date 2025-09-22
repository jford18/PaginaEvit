import { SERVICES_DATA } from '../constants.js';
import ServiceCard from './ServiceCard.js';

const h = React.createElement;

function Services() {
  return h(
    'section',
    { id: 'servicios', className: 'py-20 bg-white' },
    h(
      'div',
      { className: 'container mx-auto px-6' },
      h(
        'div',
        { className: 'text-center mb-12' },
        h('h2', { className: 'text-3xl md:text-4xl font-extrabold text-gray-900' }, 'Nuestros Servicios'),
        h('p', { className: 'mt-4 text-lg text-gray-600 max-w-2xl mx-auto' }, 'Ofrecemos un ecosistema completo de soluciones tecnológicas para llevar tu empresa al siguiente nivel.')
      ),
      h(
        'div',
        { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' },
        ...SERVICES_DATA.map((service, index) => h(ServiceCard, { key: service.id, service, index }))
      )
    )
  );
}

export default Services;
