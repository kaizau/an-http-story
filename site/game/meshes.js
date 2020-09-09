// Zyra
export const ZYR = 0;

// Teleporters (exit, A, B, C, D)
export const TLX = 1;
export const TLA = 2;
export const TLB = 3;
export const TLC = 4;
export const TLD = 5;

// Block, movable block
export const ___ = 6;
export const __M = 7;

// Eye enemy and patrol points
export const EYE = 8;
export const EY1 = 9;
export const EY2 = 10;
export const EY3 = 11;
export const EY4 = 12;

// Seeker Eye
export const SEY = 13;

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
