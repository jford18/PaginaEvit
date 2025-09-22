import { IconMenu, IconX } from './icons/Icons.js';

const { useState, createElement: h } = React;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#mision', text: 'Misión' },
    { href: '#vision', text: 'Visión' },
    { href: '#contacto', text: 'Contacto' },
  ];

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    bg-white shadow-md
  `;

  return h(
    'header',
    { className: headerClasses },
    h(
      'div',
      { className: 'container mx-auto px-6 py-3 flex justify-between items-center' },
      h(
        'a',
        { href: '#inicio', className: 'flex items-center' },
        h('img', { src: 'evti360-logo.PNG', alt: 'EVTI360 Logo', className: 'h-12 w-auto' })
      ),
      h(
        'nav',
        { className: 'hidden md:flex items-center space-x-8' },
        ...navLinks.map(link => h('a', {
          href: link.href,
          className: 'text-gray-700 hover:text-blue-600 transition duration-300 font-medium'
        }, link.text)),
        h(
          'a',
          {
            href: '#contacto',
            className: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
          },
          'Contáctanos'
        )
      ),
      h(
        'div',
        { className: 'md:hidden' },
        h(
          'button',
          {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            'aria-label': 'Toggle menu'
          },
          h(IconMenu, { className: 'h-6 w-6 text-gray-700' })
        )
      )
    ),
    // Mobile Menu
    isMenuOpen && h(
      'div',
      { className: 'md:hidden bg-white shadow-lg' },
      h(
        'nav',
        { className: 'flex flex-col items-center p-4 space-y-4' },
        ...navLinks.map(link => h('a', {
          href: link.href,
          className: 'text-gray-700 hover:text-blue-600 transition duration-300 font-medium py-2',
          onClick: () => setIsMenuOpen(false)
        }, link.text)),
        h(
          'a',
          {
            href: '#contacto',
            className: 'w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105',
            onClick: () => setIsMenuOpen(false)
          },
          'Contáctanos'
        )
      )
    )
  );
}

export default Header;