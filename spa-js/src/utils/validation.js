export const validateName = (nameField) => {
  const nameFormat = /^[а-яА-Яa-zA-ZёË\- ]{1,20}/;
  const errName = document.getElementById('spanNameForm')

  if (nameField.match(nameFormat)) {
    errName.textContent = '';
    return true;
  } else {
    errName.textContent = 'Input Error!';
    document.getElementById('name').value = "";
    return false;
  }
}

export const validateNameTable = (nameField) => {
  const nameFormat = /^[а-яА-Яa-zA-ZёË\- ]{1,20}/;
  const errName = document.getElementById('spanNameEdit')

  if (nameField.match(nameFormat)) {
    errName.textContent = '';
    return true;
  } else {
    errName.textContent = 'Input Error!';
    errName.value = "";
    return false;
  }
}

export const validatePhone = (phoneField) => {
  const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{1,20}$/;
  const errPhone = document.getElementById('spanPhoneForm')

  if (phoneField.match(phoneFormat)) {
    return true;
  } else {
    errPhone.textContent = 'Input Error! Example: +7 xxx xxx xx xx';
    document.getElementById('phone').value = ""
    return false;
  }
}

export const validatePhoneTable = (phoneField) => {
  const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{1,20}$/;
  const errPhone = document.getElementById('spanPhoneEdit')

  if (phoneField.match(phoneFormat)) {
    return true;
  } else {
    errPhone.textContent = 'Input Error! Example: +7 xxx xxx xx xx';
    document.getElementById('spanPhoneEdit').value = ""
    return false;
  }
}
