// Business Logic

function beepBoop(number) {
  let countingArray = [];
  
  if (number % 1 !== 0) {
    return 'Not a valid entry';
  }

  for (let i = 0; i <= number; i++) {
    let iString = i.toString();
    if (iString.includes('3')) {
      countingArray.push('Won\'t you be my neighbor?');
    } else if (iString.includes('2')) {
      countingArray.push('Boop!');
    } else if (iString.includes('1')) {
      countingArray.push('Beep!');
    } else {
      countingArray.push(i);
    }
  }
  return countingArray;
};



// User Interface Logic

$(document).ready(function() {
  $('#form-number').submit(function(event) {P
    event.preventDefault();

    const userNumberInput = $('input#userNumber').val();
    
    $('#form-number')[0].reset();
  });
});