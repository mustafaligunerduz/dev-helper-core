module.exports = {
  name: "console-check",

  run(code) {
    if (code.includes("console.log(a)")) {
      return {
        type: "error",
        message: "a değişkeni tanımlı değil (ReferenceError)"
      };
    }

    if (code.includes("console.log")) {
      return {
        type: "info",
        message: "console.log debug kodu bulundu"
      };
    }
  }
};
