// The 404 page is fluid (it was designed to fill any window), so it is not scaled like the others.
import React from 'react';
import { createRoot } from 'react-dom/client';
import NotFoundLogic from '../logic/notfoundLogic.jsx';
import NotFound from '../views/NotFound.jsx';
import '../styles/notfound.css';
import '../styles/notfound-hover.css';

class Page extends NotFoundLogic {
  render() {
    return <NotFound v={this.renderVals()} />;
  }
}

createRoot(document.getElementById('root')).render(<Page />);
