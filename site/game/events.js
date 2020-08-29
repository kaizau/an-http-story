//
// A tiny event bus
//

const events = Object.create(null);

export default {
  on(event, handler) {
    events[event] = events[event] || [];
    events[event].push(handler);
  },

  off(event, handler) {
    if (events[event]) {
      const index = events[event].indexOf(handler);
      if (index > -1) {
        events[event].splice(index, 1);
      }
    }
  },

  one(event, handler) {
    const oneHandler = (...args) => {
      handler(...args);
      this.off(event, oneHandler);
    };
    this.on(event, oneHandler);
  },

  emit(event, ...args) {
    if (events[event]) {
      events[event].forEach((handler) => handler(...args));
    }
  },
};
