export default function User(game, state) {
  const user = {
    load() {
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
    },

    save(key, value) {
      state.user[key] = value;
      if (window.localStorage) {
        localStorage.userData = JSON.stringify(state.user);
      }
    },

    checkMonetization() {
      // TODO
    },
  };

  user.load();

  return user;
}
