import UserStore from './UserStore';

class RootStore {
  UserStore = new UserStore();
}

const store = new RootStore();

export default store;
