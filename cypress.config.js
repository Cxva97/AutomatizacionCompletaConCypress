const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1111,
  viewportHeight: 691,
  
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.laboratoriodetesting.com/",
    retries: {
      openMode: 1, // intentos en modo abierto
      runMode: 1 // intentos en modo ejecucion, terminal
    },
  },
});
