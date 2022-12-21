const fs = require("fs");
const prettier = require("prettier");

const getAndModifySVG = (url) => {
  const svgFileData = fs.readFileSync(url);
  const htmlString = svgFileData.toString();
  const re = /\<.*\>([\s\S]*)\<\/.*\>/;
  return re.exec(htmlString)[1].trim();
};

const createFile = (data, filename) => {
  const componentName = filename.split(".")[0];
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

  fs.writeFileSync(
    `../Icons/${filename.split(".")[0]}.tsx`,
    prettier.format(tsxData)
  );
};

const convertIcontoReact = () => {
  const files = fs.readdirSync("../Svg");
  files.map((files) => {
    const children = getAndModifySVG(`../Svg/${files}`);
    createFile(children, files);
  });
};

convertIcontoReact();
