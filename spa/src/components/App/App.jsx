import React from 'react';

import { inject, observer } from 'mobx-react';

import Table from '../Table/Table';
import AddUser from '../AddUser/AddUser';

import './App.scss';

function App() {
  return (
    <div className="app">
      <main className="main">
        <Table />

        <AddUser />
      </main>
    </div>
  );
}

export default inject(({ UserStore }) => {
  const {
    loggedIn,
    handleGetUserInfo,
  } = UserStore;

  return {
    loggedIn,
    handleGetUserInfo,
  };
})(observer(App));
