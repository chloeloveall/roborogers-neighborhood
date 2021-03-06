// Business Logic

function beepBoop(name, number) {
  let countingArray = ['Hello ' + name + '!'];

  if (number % 1 !== 0 || number === '' && name === '') {
    return 'Blerp! That is not a valid entry.'
  } else if (number % 1 !== 0 || number === '') {
    return 'Blerp! That is not a valid entry, ' + name + '.';
  }

  for (let i = 0; i <= number; i++) {
    let iString = i.toString();
    if (iString.includes('3') && name !== '') {
      countingArray.push('Won\'t you be my neighbor, ' + name + '?');
    } else if (iString.includes('3')) {
      countingArray.push('Won\'t you be my neighbor?');
    } else if (iString.includes('2')) {
      countingArray.push('Boop!');
    } else if (iString.includes('1')) {
      countingArray.push('Beep!');
    } else {
      countingArray.push(i + '... ');
    }
  };
  
  return countingArray.join(' ');
};



// User Interface Logic

$(document).ready(function() {
  $('#form-number').submit(function(event) {
    event.preventDefault();

    const userNameInput = $('input#userName').val();
    const userNumberInput = $('input#userNumber').val();

    
    $('#robotResults').text(beepBoop(userNameInput, userNumberInput)).show();
    
    $('#form-number')[0].reset();
  });
});