// await delay(500)
export function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Local storage saved progress
export const progress = {
  get() {
    let progress;
    try {
      progress = JSON.parse(window.localStorage.progress);
    } catch (e) {
      // No progress
    }
    return progress || [];
  },

  add(levelId) {
    const progress = this.get();
    const id = levelId.toString();
    if (!progress.includes(id)) {
      progress.push(id);
      progress.sort();
      window.localStorage.progress = JSON.stringify(progress);
    }
  },
};

// Event Bus
const _events = Object.create(null);
window._events = _events;
export const events = {
  on(event, handler) {
    _events[event] = _events[event] || [];
    _events[event].push(handler);
  },

  off(event, handler) {
    if (_events[event]) {
      const index = _events[event].indexOf(handler);
      if (index > -1) {
        delete _events[event][index];
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
    if (process.env.DEBUG) {
      console.log("EVENT", event, ...args);
    }
    if (_events[event]) {
      _events[event].forEach((handler) => handler && handler(...args));
    }
  },
};
