// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0
  if (!Number.isInteger(week) || week <= 0) {
    return total
  }

  const start = (week - 1) * 7
  if (start >= birdsPerDay.length) {
    return total
  }

  const end = Math.min(start + 7, birdsPerDay.length)
  for (let i = start; i < end; i++) {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }
}
