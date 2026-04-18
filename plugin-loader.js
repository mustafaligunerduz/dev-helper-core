const fs = require("fs");
const path = require("path");

function loadPlugins() {
  const pluginDir = path.join(__dirname, "plugins");
  const files = fs.readdirSync(pluginDir);

  let plugins = [];

  for (let file of files) {
    const plugin = require(path.join(pluginDir, file));
    plugins.push(plugin);
  }

  return plugins;
}

module.exports = { loadPlugins };
