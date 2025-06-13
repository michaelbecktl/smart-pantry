// Helper Functions //

export function capitaliseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export function capitaliseEvery(str: string) {
  const splitString = str.split(' ')
  const capsAll = splitString.map((str) => capitaliseFirst(str))
  return capsAll.join(' ')
}

export function twoDecimals(num: number | string): number {
  return Math.round(Number(num) * 100) / 100
}
