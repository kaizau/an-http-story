export default class User {
  constructor({ state }) {
    this.state = state;

    if (window.localStorage) {
      const userData = localStorage.userData;
      try {
        const { level } = JSON.parse(userData);
        state.user.set({ level });
      } catch (e) {
        // No saved userData
      }
    }

    // Set default
    if (typeof state.user.level === "undefined") {
      state.user.set({
        level: 1,
      });
    }
  }

  save(key, value) {
    this.state.user[key] = value;
    if (window.localStorage) {
      localStorage.userData = JSON.stringify(this.state.user);
    }
  }

  checkMonetization() {
    // TODO
  }
}
