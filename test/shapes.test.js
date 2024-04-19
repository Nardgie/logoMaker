// const jest = require('jest');
const { Circle, Triangle, Square } = require('../shapes');

describe('Circle', () => {
    it('should return a circle SVG', () => {
        const circle = new Circle('red', 'blue', 'Car');
        const svg = circle.generateSVG();
        expect(svg).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/20000/svg">\n <circle cx="150" cy="100" r="80" fill="red" />\n <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Car</text>\n</svg>');
    });
})

describe('Triangle', () => {
    it('should return a triangle SVG', () => {
        const triangle = new Triangle('green', 'yellow', 'Van');
        const svg = triangle.generateSVG();
        expect(svg).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/20000/svg">\n    <polygon points="150,25 225,150 75,150" fill="green" />\n    <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">Van</text>\n    </svg>');
    });
})

describe('Square', () => {
    it('should return a square SVG', () => {
        const square = new Square('red', 'blue', 'Bus');
        const svg = square.generateSVG();
        expect(svg).toEqual('<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/20000/svg">\n    <rect x="50" y="50" width="200" height="100" fill="red" />\n    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Bus</text>\n    </svg>');
    });
})