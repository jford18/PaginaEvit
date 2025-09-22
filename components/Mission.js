import useOnScreen from '../hooks/useOnScreen.js';

const { useRef, createElement: h } = React;

function Mission() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-100px');

  const containerClasses = `
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;

  return h(
    'section',
    { id: 'mision', ref: ref, className: 'py-20 bg-gray-50' },
    h(
      'div',
      { className: 'container mx-auto px-6' },
      h(
        'div',
        { className: `grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${containerClasses}` },
        // Image Column
        h(
          'div',
          null,
          h('img', {
            src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Equipo colaborando en un proyecto tecnológico',
            className: 'rounded-lg shadow-xl w-full h-full object-cover'
          })
        ),
        // Text Column
        h(
          'div',
          null,
          h('h2', { className: 'text-3xl md:text-4xl font-extrabold text-gray-900 mb-6' }, 'Nuestra Misión'),
          h(
            'p',
            { className: 'text-lg text-gray-600 leading-relaxed' },
            'Impulsar la transformación digital de nuestros clientes, convirtiendo sus desafíos en ventajas competitivas mediante soluciones tecnológicas innovadoras, personalizadas y de alto impacto.'
          ),
          h(
            'p',
            { className: 'text-lg text-gray-600 leading-relaxed mt-4' },
            'Nos comprometemos a ser un socio estratégico que entrega valor tangible, optimiza procesos y cataliza el crecimiento sostenible.'
          )
        )
      )
    )
  );
}

export default Mission;