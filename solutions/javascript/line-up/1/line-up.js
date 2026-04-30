//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * 
 * @param word
 * @param n
 * @return {`${string}, you are the ${string}${string} customer we serve today. Thank you!`}
 */
export function format(word, n) {
  const lastTwoDigits = n % 100
  let ordinalSuffix = ''

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    ordinalSuffix = 'th'
  } else if (n.toString().endsWith('1')) {
    ordinalSuffix = 'st'
  } else if (n.toString().endsWith('2')) {
    ordinalSuffix = 'nd'
  } else if (n.toString().endsWith('3')) {
    ordinalSuffix = 'rd'
  } else {
    ordinalSuffix = 'th'
  }

  return `${word}, you are the ${n}${ordinalSuffix} customer we serve today. Thank you!`
}
