module.exports = {
  name: "basic-check",

  run(code) {
    if (code.includes("undefined")) {
      return {
        type: "warning",
        message: "undefined kullanımı tespit edildi"
      };
    }

    if (code.includes("for")) {
      return {
        type: "info",
        message: "loop (for) kodu bulundu"
      };
    }
  }
};
