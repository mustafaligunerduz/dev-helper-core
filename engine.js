function runEngine(code, plugins) {
  let results = [];

  for (let plugin of plugins) {
    try {
      const res = plugin.run(code);
      if (res) results.push({
        plugin: plugin.name,
        ...res
      });
    } catch (e) {
      results.push({
        plugin: plugin.name,
        type: "error",
        message: "Plugin error: " + e.message
      });
    }
  }

  if (results.length === 0) {
    return [{ type: "ok", message: "Hata bulunamadı" }];
  }

  return results;
}

module.exports = { runEngine };
