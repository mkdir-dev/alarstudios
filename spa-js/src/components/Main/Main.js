import { createSection } from '../Section/Section.js';

export const createMain = () => {
  const section = createSection();

  const main = document.createElement('main');

  main.classList.add('main');

  main.append(section);

  return main;
};