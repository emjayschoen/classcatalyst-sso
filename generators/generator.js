// https://www.npmjs.com/package/custom-template-generator#usage
const generator = require('custom-template-generator');
const changeCase = require('change-case');
const _ = require('lodash');

const args = process.argv.slice(2);
const templateName = args[0];
const path = args[1];
const dest = `${path.split('/').slice(0, -1).join('/')}`;
const name = path.split('/').slice(-1)[0];
const className = changeCase.pascal(name);
const snakeName = changeCase.snake(name);
const constName = changeCase.constant(name);
const titleName = changeCase.title(name);
const camelName = changeCase.camel(name);
const rootPath = path.split('/').map(p => '..').join('/');

const settings = {
  componentName: name,
  templateName,
  customTemplatesUrl: './generators/',
  dest: `./src/${dest}`,
  data: {
    snakeName, className, constName, camelName, titleName, rootPath,
  },
};

console.log(settings);
generator(settings);
