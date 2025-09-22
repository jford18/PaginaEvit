import useOnScreen from '../hooks/useOnScreen.js';
import { IconCheck } from './icons/Icons.js';

const { useRef, createElement: h } = React;

function ServiceCard({ service, index }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-100px');

  const delay = index * 100;
  
  const cardClasses = `
    bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col text-left h-full
    transform transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;

  return h(
    'div',
    { ref: ref, className: cardClasses, style: { transitionDelay: `${delay}ms` } },
    h(
      'div',
      { className: 'mb-5' },
       h(service.icon, { className: 'h-8 w-8 text-blue-600' })
    ),
    h(
      'h3',
      { className: 'text-xl font-bold mb-2 text-gray-900' },
      service.title
    ),
    h(
      'p',
      { className: 'text-gray-600 mb-4 text-sm flex-grow' },
      service.description
    ),
    h(
      'ul',
      { className: 'space-y-2 mt-auto pt-4 border-t border-gray-100' },
      ...service.details.map(detail => 
        h(
          'li', 
          { key: detail, className: 'flex items-start' },
          h(IconCheck, { className: 'h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0' }),
          h('span', { className: 'text-sm text-gray-700' }, detail)
        )
      )
    )
  );
}

export default ServiceCard;
