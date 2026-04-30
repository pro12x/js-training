/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * @param timer {null|number}
 * @returns {string}
 */
export const cookingStatus = (timer = null) => {
  let value = ''
  if (timer === 0) value = 'Lasagna is done.'
  else if (timer && timer !== 0) value = 'Not done, please wait.'
  else value = 'You forgot to set the timer.'
  return value
}

/**
 * @param layers {string[]}
 * @param average {number}
 * @return number
 */
export const preparationTime = (layers, average = 2) => {
  return layers.length * average
}

/**
 * @param layers {string[]}
 * @return object
 */
export const quantities = (layers) => {
  let sauce = 0, noodle = 0
  for (const layer of layers) {
    sauce += layer === 'sauce' ? 1 : 0
    noodle += layer === 'noodles' ? 1 : 0
  }

  return {
    noodles: 50 * noodle,
    sauce: 0.2 * sauce
  }
}

/**
 * @param list1 {string[]}
 * @param list2 {string[]}
 * @return
 */
export const addSecretIngredient = (list1, list2) => {
  list2.push(list1[list1.length - 1])
}

/**
 * @param recipe {object}
 * @param portions {number}
 * @return object
 */
export const scaleRecipe = (recipe, portions = 2) => {
  const scaled = {}
  for (const key in recipe) {
    scaled[key] = recipe[key] * (portions / 2)
  }
  return scaled
}