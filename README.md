# 🧩 Dev Helper Core

A lightweight plugin-based tool for detecting code patterns and simple errors.

---

## 🚀 What is this?

Dev Helper Core analyzes code using **plugins**.  
It helps detect issues like undefined variables, debug patterns, and basic code structures.

No AI required — fully rule-based and extendable.

---

## ⚙️ Features

- 🔌 Plugin system
- ⚡ Fast code analysis
- 🧠 Pattern-based detection
- 🛠 Easy to extend

---

## 📦 Usage

```js
const { run } = require("./index");

const result = run("console.log(a)");
console.log(result);
