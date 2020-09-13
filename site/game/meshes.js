// Zyra
export const ZYR = 0;

// Teleporters (exit, A, B, C, D, E)
export const TLX = 1;
export const TLA = 2;
export const TLB = 3;
export const TLC = 4;
export const TLD = 5;
export const TLE = 6;
export const TLF = 7;

// Block, movable block
export const ___ = 10;
export const __M = 11;

// Eye enemy and patrol points
export const EYE = 12;
export const EY1 = 13;
export const EY2 = 14;
export const EY3 = 15;
export const EY4 = 16;

// Seeker Eye
export const SEY = 20;

// Laser (oriented X or Z)
// export const LSX = 14;
// export const LSZ = 15;

// Gate / gatekeeper boss
// export const GAT = 16;

const dict = {
  ZYR,
  TLX,
  TLA,
  TLB,
  TLC,
  TLD,
  TLE,
  ___,
  __M,
  EYE,
  EY1,
  EY2,
  EY3,
  EY4,
  SEY,
};

export function replaceMeshStrings(matrix) {
  return matrix.map((layer) => {
    return layer.map((row) => {
      return row.map((col) => {
        return dict[col];
      });
    });
  });
}
