import { makeAutoObservable } from 'mobx';

import { dataUsers } from '../utils/constants/constants';

export default class UserStore {
  users = [];

  loading = false;

  errload = '';

  constructor() {
    makeAutoObservable(this);
  }

  savedUser = (name, phone) => {
    this.loading = true;
    this.errload = '';

    setTimeout(() => {
      if (name && phone) {
        const arr = this.users;

        if (this.users.length === 0) {
          this.users = [...dataUsers, { name, phone }];
        } else {
          this.users = [...arr, { name, phone }];
        }
        // this.users = [...arr, { name, phone }];
      } else {
        this.errload = 'Что-то пошло не так';
      }

      this.loading = false;
      this.errload = '';
    }, 1000);
  };

  editedUser = (user, isUsers, isOldUser) => {
    const arr = isUsers.filter((item) => item.phone
      !== isOldUser.phone && item.name !== isOldUser.name);

    this.users = [...arr, user];
  };

  deletedUser = (user, isUsers) => {
    this.users = isUsers.filter((item) => item.phone !== user.phone);
  };
}
