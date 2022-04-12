import { createContact } from '../AddContact/AddContact.js';
import { postContact } from '../../utils/api.js';
import { validateName, validatePhone } from '../../utils/validation.js';

export const createForm = () => {
  const form = document.createElement('form');
  const h2 = document.createElement('h2');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const spanName = document.createElement('span');
  const labelPhone = document.createElement('label');
  const inputPhone = document.createElement('input');
  const spanPhone = document.createElement('span');
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');

  form.classList.add('form');
  h2.classList.add('form__title')
  labelName.classList.add('form__label');
  inputName.classList.add('form__input');
  spanName.classList.add('form__input-err')
  labelPhone.classList.add('form__label');
  inputPhone.classList.add('form__input');
  spanPhone.classList.add('form__input-err')
  buttonWrapper.classList.add('form__btn-wrapper');
  button.classList.add('form__button');

  h2.textContent = 'Add contact';
  labelName.textContent = 'Name';
  labelName.htmlFor = 'name';
  inputName.type = 'text';
  inputName.name = 'name';
  inputName.id = 'name';
  inputName.placeholder = 'Name';
  spanName.id = 'spanNameForm';
  labelPhone.textContent = 'Phone';
  labelPhone.htmlFor = 'phone';
  inputPhone.type = 'text';
  inputPhone.name = 'phone';
  inputPhone.id = 'phone';
  inputPhone.placeholder = 'Phone';
  spanPhone.id = 'spanPhoneForm';
  button.type = 'submit';
  button.ariaLabel = 'Add';
  button.textContent = 'Add';

  form.append(h2, labelName, labelPhone, buttonWrapper);
  labelName.append(inputName, spanName);
  labelPhone.append(inputPhone, spanPhone);
  buttonWrapper.append(button);

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (document.getElementById('spanErrSubmit')) {
      document.getElementById('spanErrSubmit').remove();
    }

    const nameVal = document.getElementById('name').value;
    const phoneVal = document.getElementById('phone').value;

    if (validateName(nameVal) == false) {
      return;
    } else if (validatePhone(phoneVal) == false) {
      return;
    } else if (
      validateName(nameVal) == true
      && validatePhone(phoneVal) == true
    ) {
      postContact({
        name: nameVal,
        phone: phoneVal,
      })
        .then((res) => {
          createContact(res);

          nameVal = '';
          phoneVal = '';
        })
        .catch((err) => {
          console.log(err);

          const spanErrSubmit = document.createElement('span');
          spanErrSubmit.classList.add('form__submit-err');
          spanErrSubmit.id = 'spanErrSubmit';
          spanErrSubmit.textContent = 'Что-то пошло не так. Попробуйте еще раз';

          buttonWrapper.append(spanErrSubmit);

          setTimeout(() => {
            spanErrSubmit.remove();
          }, 2000);
        });
    }
  });

  return form;
};