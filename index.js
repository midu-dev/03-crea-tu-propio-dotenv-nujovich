// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')
function config (options = {}) {
  const filePath = options.path ?? './.env'
  if (!fs.existsSync(filePath)) return
  const encoding = options.encoding ?? 'utf8'

  const variables = fs.readFileSync(filePath, encoding).split('\n')
  if (!variables) return
  for (const variable of variables) {
    const [key, value] = variable.split('=')
    process.env[key] = value.replace(/"/g, '')
  }
}

module.exports = { config }
