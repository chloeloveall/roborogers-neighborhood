# _Mr. Roboger's Neighborhood_

![Mr Robo Rogers](img/roborogers.jpg)

#### _A webpage application that accepts a numerical input from a user and returns a range of numbers (from 0 to the inputted number)_

#### By _**Chloe Loveall**_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Git
* Github
* VS Code
* coolers.co
* JavaScript
* jQuery

## Description

_Third independent Epicodus project that creates an application that accepts a numerical input from a user and returns a range of number (from 0 to the user's inputted number). However, the application replaces all numbers that contain a 1 with 'Beep!', all number that contain a 2 with 'Boop!', and all number that contain a 3 with 'Won't you be my neighbor?'_<br><br>
_View project on GH Pages: [gh-pages](https://chloeloveall.github.io/robogers-neighborhood/)_

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

Describe: beepBoop()<br>
Test: 'It should return an array with a 0 if the number 0 is inputted'<br>
Expect(beepBoop(0).toEqual([0]));<br>
Test: 'It should return return an array with `'0', 'Beep!'` if 1 is inputted'<br>
Expect(beepBoop(1).toEqual([`'0', 'Beep!'`]));

## Known Bugs

* None

## License

[MIT](LICENSE.md)

## Contact Information

_Chloe Loveall <chloeloveall@protonmail.com>_