# _Mr. Roboger's Neighborhood_

![Mr Robogers](img/roborogers.jpg)

#### _A webpage application that accepts a numerical input from a user and returns a range of numbers (from 0 to the inputted number)_

#### By _**Chloe Loveall**_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Git
* Github
* VS Code
* JavaScript
* jQuery

## Description

_Third independent Epicodus project that creates an application that accepts a numerical input from a user and returns a range of number (from 0 to the user's inputted number). However, the application replaces all numbers that contain a 1 with 'Beep!', all number that contain a 2 with 'Boop!', and all number that contain a 3 with 'Won't you be my neighbor?'_<br><br>
_View project on GH Pages: [gh-pages](https://chloeloveall.github.io/robogers-neighborhood/)_

## Note to Epicodus Instructors

1/22/2021 - I am reviewing previous lessons on looping from the week because I don't understand how to proceed with the project. There will be a gap in commits while I do that. I also went through all of the looping lessons on Codecademy.com (in the Introduction to JavaScript Course).

## Setup/Installation Requirements

1. Clone the repository
    >$ git clone https://github.com/chloeloveall/robogers-neighborhood.git
2. Open the robogers-neighborhood directory in a code editor (VS Code is recommended)
3. To view the site from VS Code, use the VS Code Live Server extension to open index.html in your preferred browser 

## Specifications

| Behavior                                | Input Example | Output Example              |
| --------------------------------------- | :-----------: | --------------------------- |
| Numbers that do NOT contain 1, 2, or 3  | 0             | '0'                         |
| Numbers that contain a 1                | 1             | 'Beep!'                     |
| Numbers that contain a 2                | 2             | 'Boop!'                     |
| Numbers that contain a 3                | 3             | 'Won't you be my neighbor?' |

Describe: beepBoop()

Test: 'It should return an array of numbers from 0 to inputted number'
Expect(beepBoop(`'5'`).toEqual(`'0, 1, 2, 3, 4, 5'`))

Test: 'It should return a value of `'0'` if the string `'0'` is inputted'
Expect(beepBoop(`'0'`).toEqual(`0`));

Test: 'It should return return a value of `'Beep!'` if the string `'1'` is inputted'
Expect(beepBoop(`'1'`).toEqual(`'Beep!'`));

Test: 'It should return a value of `'Boop!` if the string `'2'` is inputted'
Expect(beepBoop(`'2'`).toEqual(`'Boop!'`));

Test: 'It should return a value of `'Won't you be my neighbor?'` if the string `'3'` is inputted'
Expect(beepBoop(`'3'`).toEqual(`'Won't you be my neighbor?'`));

Test: 'It should return a value of `'Won't you be my neighbor?'` if the string`'13'` is inputted'
Expect(beepBoop(`'13'`).toEqual(`'Won't you be my neighbor?'`));

Test: 'It should return a value of `'Not a valid entry'` if the input value inputted is not an integer'
Expect(beepBoop(`'banana'`).toEqual(`'Not a valid entry'`))

<!-- Test: 'It converts inputted number to string'
Expect(beepBoop(0)toEqual(`'0'`));

Test: 'It splits number with multiple digits'
Expect(beepBoop(10)toEqual(`'1', '0'`)); -->

<!-- Test: 'It converts each string back into a number'
Expect(beepBoop(10).toEqual(`1, 0`)); -->

<!-- Test: 'It recognizes an inputted number containing the number 1'
Expect(beepBoop(01).toEqual(`'Beep!'`)); -->

## Known Bugs

* None

## License

[MIT](LICENSE.md)

## Contact Information

_Chloe Loveall <chloeloveall@protonmail.com>_