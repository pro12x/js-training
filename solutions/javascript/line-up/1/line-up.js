//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (word, n) => {
  const lastTwoDigits = n % 100;
  let ord = '';

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    ord = 'th';
  } else if (n.toString().endsWith('1')) {
    ord = 'st';
  } else if (n.toString().endsWith('2')) {
    ord = 'nd';
  } else if (n.toString().endsWith('3')) {
    ord = 'rd';
  } else {
    ord = 'th';
  }

  return `${word}, you are the ${n}${ord} customer we serve today. Thank you!`;
}
