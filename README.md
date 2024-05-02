# logo Maker

## Description

The `logo Maker` is a Node.js command-line application that allows users to generate customized logos in SVG format. This tool offers a simple interface for users to specify the text, colors, and shapes of their logos, enabling rapid creation of logos for various projects. This application was created to explore SVG creation and to refine CLI application development skills. It addresses the need for a straightforward, customizable logo creation tool.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)


## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

[link to repository](https://github.com/Nardgie/logoMaker)

2. **Install Dependencies**

`npm i`
 

## Usage

To run the application, use the following command in your terminal:

`node index.js`


You will be prompted to provide:
- Text (up to three characters)
- Text color (keyword or hex code)
- Shape (choices: circle, triangle, square)
- Shape color (keyword or hex code)

After entering these inputs, an SVG file named `logo.svg` will be generated in the project directory, and you can view your customized logo by opening this file in any web browser.

### Video Demo

[Demo Video](https://watch.screencastify.com/v/oZsnHTR3VKItXkEvOtLf)


## Features

- **Command-Line Interface:** Simple and interactive prompts to guide the user through logo creation.
- **Customization:** Allows specification of text, text color, shape, and shape color.
- **SVG Output:** Generates a downloadable SVG file immediately after input.

## Credits

Developed by Nardgelen Jean Francois. This application uses the following resources:
- **Inquirer.js** for interactive command-line prompts.
- **File System (fs)** module for handling file operations.
- **Jest** for easy JavaScript testing.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Tests
Run the following command for tests-

`npm run test`

