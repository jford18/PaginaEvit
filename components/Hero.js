const h = React.createElement;

function Hero() {
  return h(
    'section',
    {
      id: 'inicio',
      className: 'relative bg-cover bg-center bg-no-repeat pt-24 pb-20 md:pb-32',
      style: { backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }
    },
    h('div', { className: 'absolute inset-0 bg-white bg-opacity-40' }),
    h(
      'div',
      { className: 'container mx-auto px-6 text-center relative z-10' },
      h(
        'div',
        { className: 'max-w-4xl mx-auto py-16' },
        h(
          'h1',
          { className: 'text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6' },
          'Transformamos ',
          h('span', { className: 'text-blue-600' }, 'tecnología'),
          ' en ',
          h('span', { className: 'text-blue-600' }, 'valor estratégico')
        ),
        h(
          'p',
          { className: 'text-lg md:text-xl text-gray-700 mb-10' },
          'En EVTI360, fusionamos innovación y experiencia para impulsar el futuro digital de su empresa.'
        ),
        h(
          'a',
          {
            href: '#servicios',
            className: 'inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105'
          },
          'Conoce nuestros servicios'
        )
      )
    )
  );
}

export default Hero;
