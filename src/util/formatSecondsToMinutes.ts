/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
enum FORMAT_VALUES {
  MINUTES = 60,
  SECONDS = 60,
}

export function formatSecondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / FORMAT_VALUES.MINUTES).toString().padStart(2, '0');
  const secondsMod = Math.floor(seconds % FORMAT_VALUES.SECONDS).toString().padStart(2, '0');

  return `${minutes}:${secondsMod}`
}