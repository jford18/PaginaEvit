import useOnScreen from '../hooks/useOnScreen.js';

const { useRef, createElement: h } = React;

function Vision() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-100px');

  const containerClasses = `
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;

  return h(
    'section',
    { id: 'vision', ref: ref, className: 'py-20 bg-white' },
    h(
      'div',
      { className: 'container mx-auto px-6' },
      h(
        'div',
        { className: `grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${containerClasses}` },
        // Text Column
        h(
          'div',
          null,
          h('h2', { className: 'text-3xl md:text-4xl font-extrabold text-gray-900 mb-6' }, 'Nuestra Visión'),
          h(
            'p',
            { className: 'text-lg text-gray-600 leading-relaxed' },
            'Ser la empresa líder en innovación y consultoría tecnológica en la región, reconocida por nuestra excelencia, agilidad y capacidad para anticipar las necesidades del futuro digital.'
          ),
          h(
            'p',
            { className: 'text-lg text-gray-600 leading-relaxed mt-4' },
            'Aspiramos a construir un ecosistema donde la tecnología y el talento humano convergen para crear un progreso significativo y duradero para nuestros socios y la sociedad.'
          )
        ),
        // Image Column
        h(
          'div',
          null,
          h('img', {
            src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Visión de futuro tecnológico',
            className: 'rounded-lg shadow-xl w-full h-full object-cover'
          })
        )
      )
    )
  );
}

export default Vision;