// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
const juices = [
  {
    name: 'Pure Strawberry Joy',
    time: 0.5
  },
  {
    name: 'Energizer',
    time: 1.5
  },
  {
    name: 'Green Garden',
    time: 1.5
  },
  {
    name: 'Tropical Island',
    time: 3.0
  },
  {
    name: 'All or Nothing',
    time: 5.0
  }
]

const limeWedges = {
  'small': 6,
  'medium': 8,
  'large': 10
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let i = 0
  let index = juices.length * 2
  while (i < juices.length) {
    if (juices[i].name === name) {
      index = i
    }
    i++
  }

  return index > juices.length - 1 ? 2.5 : juices[index].time
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0, i = 0
  while (wedges < wedgesNeeded && i < limes.length) {
    wedges += limeWedges[limes[i]]
    i += 1
  }
  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0

  while (i < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[i])
    i += 1
  }

  return orders.slice(i)
}
