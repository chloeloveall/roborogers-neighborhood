function beepBoop(number) {
  if (number === 1) {
    return 'Beep!';
  } else if (number === 2) {
    return 'Boop!';
  } else {
    return number;
  }
}
console.log(beepBoop(3));