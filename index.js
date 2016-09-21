function isRenderer () {
  // running in a web browser or in renderer without node integration.
  if (typeof process === 'undefined') return false
  
  // node-integration is disabled
  if (!process) return true

  // We're in node.js somehow
  if (!process.type) return false

  return process.type === 'renderer'
}

module.exports = isRenderer()
