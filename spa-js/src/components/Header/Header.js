export const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');

  header.classList.add('header');
  h1.classList.add('header__h1')

  h1.textContent = 'Phonebook';

  header.append(h1);

  return header;
};