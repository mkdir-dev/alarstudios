import './index.css';

import { createHeader } from './components/Header/Header.js';
import { createMain } from './components/Main/Main.js';

const app = () => {
  const header = createHeader();
  const main = createMain();

  document.body.append(header, main);
};

app();