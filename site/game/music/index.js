import mainTheme from "./404";

export const music = {
  async $ready() {
    return true;
  },

  $play() {
    const song = zzfxM(...mainTheme);
    const node = zzfxP(...song);
    node.loop = true;
  },
};
