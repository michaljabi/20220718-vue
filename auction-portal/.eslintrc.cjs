/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // Na razie (potem wrócimy i dobrze to skonfigurujemy + doinstalujemy wtyczkę)
    // "@vue/eslint-config-prettier"
  ]
}
