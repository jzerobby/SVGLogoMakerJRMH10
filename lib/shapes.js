// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderShape(shape) {
    if (shape == "circle") {
     return "https://opensource.org/license/mit/";
    } else if (shape == "square") {
     return "https://opensource.org/license/bsd-2-clause/";
    } else if (shape == "triangle") {
      return "https://opensource.org/license/bsd-3-clause/";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderShapeSection(license) {
  return `The message must not contain more than 3 characters`
  }
  
  // TODO: Create a function to generate markdown for README
  function generateShapes({ text, textColor, shape, shapeColor}) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>svg</title>
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
      </body>
    </html>
    `;
  }  
  
  module.exports = generateShapes;
  