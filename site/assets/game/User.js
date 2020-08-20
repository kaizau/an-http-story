export default function User(game, state) {
  const user = {
    load() {
      if (window.localStorage) {
        const userData = localStorage.userData;
        try {
          state.user = JSON.parse(userData);
        } catch (e) {
          console.log("Could no parse saved userData");
        }
      }

      // Set default
      if (typeof state.user.level === "undefined") {
        state.user = {
          level: 0,
          premium: false,
        };
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
