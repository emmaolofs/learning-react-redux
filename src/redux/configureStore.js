//Using CommonJS require below so we can dynamically import during build-time.
//CommonJS has a different syntax for importing and exporting, here it is used to dynamically import the appropriate file at build time.

if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
