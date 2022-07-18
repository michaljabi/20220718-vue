export default {
  install(app /* options = {} */) {
    app.config.globalProperties.$textTransform = {
      toUpper(value) {
        if (value && typeof value === "string") {
          return value.toUpperCase();
        }
      },
      toLower(value) {
        if (value && typeof value === "string") {
          return value.toLowerCase();
        }
      },
    };
    app.provide("textTransform", app.config.globalProperties.$textTransform);
  },
};
