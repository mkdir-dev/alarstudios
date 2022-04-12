import { deleteContact, editContact } from '../../utils/api.js';
import { validateNameTable, validatePhoneTable } from '../../utils/validation.js';

export const createContact = (values) => {
  const contactList = document.getElementById('tbody');

  const contact = document.createElement('tr');
  const thNameContact = document.createElement('th');
  const thPhoneContact = document.createElement('th');
  const thActionContact = document.createElement('th');
  const thDeleteContact = document.createElement('th');
  const buttonEdit = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const inputEditName = document.createElement('input');
  const spanEditName = document.createElement('span');
  const inputEditPhone = document.createElement('input');
  const spanEditPhone = document.createElement('span');

  thNameContact.classList.add('table__tbody-th');
  thPhoneContact.classList.add('table__tbody-th');
  thActionContact.classList.add('table__tbody-th');
  thDeleteContact.classList.add('table__tbody-th');
  buttonEdit.classList.add('table__button');
  buttonDelete.classList.add('table__button');
  inputEditName.classList.add('table__input');
  spanEditName.classList.add('table__input-err');
  inputEditPhone.classList.add('table__input');
  spanEditPhone.classList.add('table__input-err');

  contact.id = values._id;
  thNameContact.textContent = values.name;
  thPhoneContact.textContent = values.phone;
  buttonEdit.type = 'button';
  buttonEdit.textContent = 'Edit';
  buttonDelete.type = 'button';
  buttonDelete.textContent = 'Delete';
  spanEditName.id = 'spanNameEdit';
  spanEditPhone.id = 'spanPhoneEdit';

  contactList.append(contact);
  contact.append(thNameContact, thPhoneContact, thActionContact, thDeleteContact);
  thActionContact.append(buttonEdit);
  thDeleteContact.append(buttonDelete);

  buttonEdit.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (buttonEdit.textContent === 'Edit') {
      buttonEdit.textContent = 'Save';
      buttonEdit.type = 'submit';
      buttonEdit.id = 'saveContact';

      thNameContact.textContent = '';
      thPhoneContact.textContent = '';

      inputEditName.type = 'text';
      inputEditName.name = 'editName';
      inputEditName.id = 'editName';
      inputEditName.placeholder = values.name;
      inputEditName.value = values.name;
      inputEditPhone.type = 'text';
      inputEditPhone.name = 'editPhone';
      inputEditPhone.id = 'editPhone';
      inputEditPhone.placeholder = values.phone;
      inputEditPhone.value = values.phone;

      thNameContact.append(inputEditName, spanEditName);
      thPhoneContact.append(inputEditPhone, spanEditPhone);

    } else {
      const nameVal = document.getElementById('editName').value;
      const phoneVal = document.getElementById('editPhone').value;
      const id = contact.id

      if (validateNameTable(nameVal) === false) {
        return;
      } else if (validatePhoneTable(phoneVal) === false) {
        return;
      } else {
        editContact({
          id, name: nameVal, phone: phoneVal,
        })
          .then((res) => {
            buttonEdit.textContent = 'Edit'

            thNameContact.textContent = res.name;
            thPhoneContact.textContent = res.phone;

            values = res;
          })
          .catch((err) => console.log(err));
      }
    }
  });

  buttonDelete.addEventListener('click', (evt) => {
    evt.preventDefault();

    deleteContact(contact.id)
      .then((res) => {
        console.log(res.message);
        contact.remove();
      })
      .catch((err) => console.log(err));
  });

  return contactList;
};