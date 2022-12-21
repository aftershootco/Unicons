const fs = require("fs");
const cheerio = require("cheerio");
const prettier = require("prettier");
const lineReader = require("readline");

const fileNameChanger = (filename) => {
  return (
    filename.split(".")[0].charAt(0).toUpperCase() +
    filename.split(".")[0].slice(1)
  );
};

const getAndModifySVG = (url) => {
  const svgFileData = fs.readFileSync(url);
  const htmlString = svgFileData.toString();
  const $ = cheerio.load(htmlString, { xmlMode: true });
  return $("svg").html()
};

const createFile = (data, filename) => {
  const componentName = fileNameChanger(filename);
  const tsxData = `
import React from 'react'

const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#FFFFFF'
            {...props}
        >
        ${data}
        </svg>
    )
}

export default React.memo(${componentName})`;

  fs.writeFileSync(`../Icons/${componentName}.tsx`, prettier.format(tsxData));
};

const createImports = (imports) => {
  fs.writeFileSync("../Icons/index.ts", prettier.format(imports));
};

const convertIcontoReact = () => {
  const files = fs.readdirSync("../Svg");
  files.map((files) => {
    const children = getAndModifySVG(`../Svg/${files}`);
    createFile(children, files);
  });
  const importStatement = files
    .map(
      (name) =>
        `export { default as ${fileNameChanger(
          name
        )} } from './${fileNameChanger(name)}'\n`
    )
    .join("");
  createImports(importStatement);
};

convertIcontoReact();
