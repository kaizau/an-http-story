// await delay(500)
export function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Local storage
export const ls = {
  get(key, defaultValue) {
    let value;
    try {
      value = JSON.parse(localStorage[key]);
    } catch (e) {
      // Nope
    }
    return value || defaultValue;
  },

  set(key, value) {
    localStorage[key] = JSON.stringify(value);
  },

  del(key) {
    localStorage.removeItem(key);
  },

  pushTo(key, value) {
    const data = ls.get(key, []);
    if (!data.includes(value)) {
      data.push(value);
      data.sort();
      ls.set(key, data);
    }
  },
};

//
// Eliminated. Code actually larger after zip.
//

// document.querySelector
// export function qs(selector) {
//   return document.querySelector(selector);
// }

// Click
// export function click(el, handler) {
//   el.addEventListener("click", handler);
// }

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

  emit(event, ...args) {
    if (process.env.DEBUG) {
      console.log("EVENT", event, ...args);
    }
    if (_events[event]) {
      _events[event].slice().forEach((handler) => handler && handler(...args));
    }
  },
};
