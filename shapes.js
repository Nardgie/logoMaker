

// shapes.js

class Shape {
 constructor(fillColor, textColor, text) {
      this.fillColor = fillColor;
      this.textColor = textColor;
      this.text = text;
 }

 generateSVG() {
    throw new Error('Method not implemented');
 }
}

class Circle extends Shape {
 constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
   //  this.radius = radius;
 }

 generateSVG() {
   //return a circle svg.
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/20000/svg">
 <circle cx="150" cy="100" r="80" fill="${this.fillColor}" />
 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
 }
}

class Triangle extends Shape {
 constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
 }

 generateSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/20000/svg">
    <polygon points="150,25 225,150 75,150" fill="${this.fillColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
 }
}

class Square extends Shape {
 constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
 }

 generateSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/20000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.fillColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
 }
}

module.exports = { Circle, Triangle, Square };



/*
I need help getting started on building a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. Here is the acceptance criterea: GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered.   There needs to be a shapes.js file that has classes for Triangle, Square, and Circle classes that extends a shapes class. So far, I have downloaded the necessary dependencies but need help getting started with shapes.js and index.js. Here is an example of the svg that gets created: 
*/
