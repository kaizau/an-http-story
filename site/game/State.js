export default class State extends EventTarget {
  constructor(initial) {
    super();
    Object.assign(this, initial);
  }

  // set({key: val})
  // set(key, val)
  // set(key1, key2, val);
  set(...args) {
    if (args.length === 1) {
      Object.keys(args[0]).forEach((key) => this.set(key, args[0][key]));
      return;
    }

    let target = this;
    const value = args.pop();
    const events = args.slice();
    while (args.length > 1) {
      const key = args.shift();
      target[key] = target[key] || {};
      target = target[key];
    }
    target[args.shift()] = value;

    events.forEach((event, index) => {
      const name = events.slice(0, index + 1).join(".");
      this.dispatchEvent(new Event(name));
    });
  }

  on(...args) {
    this.addEventListener(...args);
  }

  off(...args) {
    this.removeEventListener(...args);
  }

  once(eventName, handler) {
    this.on(eventName, function onceHandler(e) {
      this.off(eventName, handler);
      handler(e);
    });
  }
}
