const { upperCase } = require('shared-utils')

module.exports = (appName) => {
  return `Hello from ${upperCase(appName)}`
}
