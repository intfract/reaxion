import fs from 'fs'

function compile(script) {
  
}

function compileFile(filePath, outputPath) {
  const file = fs.readFileSync(filePath, 'utf-8')
  fs.writeFileSync(outputPath, compile(file))
}