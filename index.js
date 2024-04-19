// index.js

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters: ",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hex): ",
    validate: (input) =>
      /^#[0-9A-F]{6}$/i.test(input) || /^[a-z]+$/i.test(input),
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hex): ",
    validate: (input) =>
      /^#[0-9A-F]{6}$/i.test(input) || /^[a-z]+$/i.test(input),
  },
];

inquirer.prompt(questions).then((answers) => {
  const text = answers.text;
  const textColor = answers.textColor;
  const shapeType = answers.shape;
  const fillColor = answers.shapeColor;

  let shape;
  switch (shapeType) {
    case "circle":
      shape = new Circle(fillColor, textColor, text);
      break;
    case "triangle":
      shape = new Triangle(fillColor, textColor, text);
      break;
    case "square":
      shape = new Square(fillColor, textColor, text);
      break;
  }

  const svg = shape.generateSVG();

  fs.writeFile("logo.svg", svg, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
});
