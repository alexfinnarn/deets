const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://deets.ddev.site",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
