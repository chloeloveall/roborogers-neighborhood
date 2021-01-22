function beepBoop(number) {
  return number.toString().split('');
  if (number === 1) {
    return 'Beep!';
  } else if (number === 2) {
    return 'Boop!';
  } else if (number === 3) {
    return 'Won\'t you be my neighbor?';
  } else {
    return number;
  }
}
console.log(beepBoop(10));