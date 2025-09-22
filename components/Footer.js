import { IconFacebook, IconTwitter, IconLinkedIn } from './icons/Icons.js';

const h = React.createElement;

function Footer() {
  const socialLinks = [
    { href: '#', icon: IconFacebook },
    { href: '#', icon: IconTwitter },
    { href: '#', icon: IconLinkedIn },
  ];

  return h(
    'footer',
    { className: 'bg-gray-800 text-white' },
    h(
      'div',
      { className: 'container mx-auto px-6 py-12' },
      h(
        'div',
        { className: 'flex flex-col md:flex-row justify-between items-center' },
        h(
          'div',
          { className: 'mb-6 md:mb-0' },
          h(
            'a',
            { href: '#inicio', className: 'flex items-center' },
            h('img', { src: 'evti360footer.PNG', alt: 'EVTI360 Footer Logo', className: 'h-12 w-auto' })
          )
        ),
        h(
          'div',
          { className: 'flex items-center space-x-6' },
          ...socialLinks.map((link, index) => h(
            'a',
            { key: index, href: link.href, className: 'text-gray-400 hover:text-white transition duration-300' },
            h(link.icon, { className: 'h-6 w-6' })
          ))
        )
      ),
      h('hr', { className: 'my-8 border-gray-700' }),
      h(
        'div',
        { className: 'text-center text-gray-400 text-sm' },
        h('p', null, `© ${new Date().getFullYear()} EVTI360. Todos los derechos reservados.`),
        h('p', { className: 'mt-1' }, 'Evolución Tecnológica e Innovación')
      )
    )
  );
}

export default Footer;