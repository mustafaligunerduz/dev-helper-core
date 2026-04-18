const { loadPlugins } = require("./plugin-loader");
const { runEngine } = require("./engine");

const plugins = loadPlugins();

function run(code) {
  return runEngine(code, plugins);
}

// TEST
const result = run("console.log(a)");
console.log(result);

module.exports = { run };
