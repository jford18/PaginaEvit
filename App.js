import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import Mission from './components/Mission.js';
import Vision from './components/Vision.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import WhatsAppButton from './components/WhatsAppButton.js';

const h = React.createElement;

function App() {
  return h(
    'div',
    { className: 'bg-white' },
    h(Header),
    h(
      'main',
      null,
      h(Hero),
      h(Services),
      h(Mission),
      h(Vision),
      h(Contact)
    ),
    h(Footer),
    h(WhatsAppButton)
  );
}

export default App;