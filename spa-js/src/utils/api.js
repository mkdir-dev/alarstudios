export const BASE_URL = 'http://localhost:4000/contacts';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fixPromise = (res) => (
  res.ok ? res.json()
    : Promise.reject(`Произошла ошибка ${res.status}: ${res.statusText}`)
);

export const getContacts = () => fetch(`${BASE_URL}`, {
  method: 'GET',
  headers
}).then((res) => fixPromise(res));

export const postContact = ({ name, phone }) => fetch(`${BASE_URL}/create`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ name, phone }),
}).then((res) => fixPromise(res));

export const deleteContact = (id) => fetch(`${BASE_URL}/${id}`, {
  method: 'DELETE',
  headers,
}).then((res) => fixPromise(res));

export const editContact = ({ id, name, phone }) => fetch(`${BASE_URL}/${id}`, {
  method: 'PATCH',
  headers,
  body: JSON.stringify({ name, phone }),
}).then((res) => fixPromise(res));