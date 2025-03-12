# Random Digits Generator

A simple and lightweight npm package to generate random digits of a specified length. Created by **Sujal Patel** for fun!

## Installation

Install the package via npm:

```sh
npm install random-digits-generator
```

Or using yarn:

```sh
yarn add random-digits-generator
```

## Usage

Import the package and generate random digits:

```javascript
import generateRandomDigits from 'random-digits-generator';

const randomNumber = generateRandomDigits(6); // Generates a 6-digit random number
console.log(randomNumber);
```

## API

### `generateRandomDigits(length: number): string`
Generates a random numeric string of the given length.

#### Parameters:
- `length` (number): The number of digits to generate.

#### Returns:
- A string containing random numeric digits.

#### Example:
```javascript
console.log(generateRandomDigits(4)); // e.g., "2741"
console.log(generateRandomDigits(8)); // e.g., "83912047"
```

## Why Use This Package?
- Simple and easy to use
- Lightweight with zero dependencies
- Useful for generating random OTPs, numeric codes, and testing data

## License
This project is licensed under the MIT License.

## Author
**Sujal Patel**

## Contributions
Feel free to submit issues or pull requests on GitHub to improve this package!

## GitHub Repository
[GitHub Link](https://github.com/devsujalpatel/random-digits)

---

Happy coding! 🚀

