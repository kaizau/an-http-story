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
      progress = JSON.parse(localStorage.AHS);
    } catch (e) {
      // No progress
    }
    return progress || [];
  },

  add(levelId) {
    const data = progress.get();
    const id = levelId.toString();
    if (!data.includes(id)) {
      data.push(id);
      data.sort();
      localStorage.AHS = JSON.stringify(data);
    }
  },
};

// Event Bus
const _events = Object.create(null);
export const events = {
  on(event, handler) {
    _events[event] = _events[event] || [];
    _events[event].push(handler);
  },

  off(event, handler) {
    if (_events[event]) {
      const index = _events[event].indexOf(handler);
      if (index > -1) {
        _events[event].splice(index, 1);
      }
    }
  },

  one(event, handler) {
    const oneHandler = (...args) => {
      handler(...args);
      events.off(event, oneHandler);
    };
    events.on(event, oneHandler);
  },

  /** @suppress {uselessCode} */
  emit(event, ...args) {
    if (process.env.DEBUG) {
      console.log("EVENT", event, ...args);
    }
    if (_events[event]) {
      _events[event].slice().forEach((handler) => handler && handler(...args));
    }
  },
};
