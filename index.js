
import App from './App.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Use React.createElement because JSX is not allowed.
root.render(React.createElement(App));
