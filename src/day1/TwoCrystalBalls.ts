// export default function two_crystal_balls(breaks: boolean[]): number {
//   const jumpAmount = Math.floor(Math.sqrt(breaks.length));

//   let i = jumpAmount;

//   for (; i < breaks.length; i += jumpAmount) {
//     if (breaks[i]) break;
//   }

//   i -= jumpAmount;

//   for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
//     if (breaks[i]) return i;
//   }

//   return -1;
// }

export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpDistance = Math.floor(Math.sqrt(breaks.length));
  let breakPoint = -1;

  for (let i = 0; i < breaks.length; i += jumpDistance) {
    if (breaks[i]) {
      breakPoint = i;
      break;
    }
  }

  for (let i = breakPoint - jumpDistance + 1; i <= breakPoint; i++) {
    if (breaks[i]) return i;
  }

  return -1
}
