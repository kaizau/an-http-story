export default {
  get() {
    let progress;
    try {
      progress = JSON.parse(localStorage.progress);
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
      localStorage.progress = JSON.stringify(progress);
    }
  },
};
