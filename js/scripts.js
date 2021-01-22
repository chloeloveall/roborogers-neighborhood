//Business logic

function beepBoop(number) {
  if (number === '1') {
    return 'Beep!';
  } else if (number === '2') {
    return 'Boop!';
  } else if (number === '3') {
    return 'Won\'t you be my neighbor?';
  } else {
    return number;
  }
  };
console.log(beepBoop('2'));

// return number.toString().split('');

//User interface Logic

$(document).ready(function() {
  $('#form-number').submit(function(event) {
    event.preventDefault();

    const userNumberInput = $('input#userNumber').val();
    
    $('#form-number')[0].reset();
  });
});