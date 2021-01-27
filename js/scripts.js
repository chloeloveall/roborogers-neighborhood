// Business logic

function beepBoop(number) {
  if (number.includes('3')) {
    return 'Won\'t you be my neighbor?'
  } else if (number === '2') {
    return 'Boop!';
  } else if (number === '1') {
    return 'Beep!';
  } else {
    return number;
  }
};
console.log(beepBoop('56788876673676879'));


// User Interface Logic

$(document).ready(function() {
  $('#form-number').submit(function(event) {
    event.preventDefault();

    const userNumberInput = $('input#userNumber').val();
    
    $('#form-number')[0].reset();
  });
});