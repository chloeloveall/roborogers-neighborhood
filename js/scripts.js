// Business Logic

function beepBoop(number) {
  let countingArray = [];

  for (let i = 0; i <= number; i++) {
    countingArray.push(i);
  }
  return countingArray;
};

console.log(beepBoop('23'));

// function beepBoop(number) {
//   let countingArray = [];

//   for (let i = 0; i <= number; i++) {
//     if (number.includes('3')) {
//       countingArray.push('Won\'t you be my neighbor?');
//     } else if (number.includes('2')) {
//       countingArray.push('Boop!');
//     } else if (number.includes('1')) {
//       countingArray.push('Beep!');
//     } else {
//       return number;
//     }
//   }
//   return countingArray;
// };

// console.log(beepBoop(''));

// User Interface Logic

$(document).ready(function() {
  $('#form-number').submit(function(event) {P
    event.preventDefault();

    const userNumberInput = $('input#userNumber').val();
    
    $('#form-number')[0].reset();
  });
});