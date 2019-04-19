import { Config } from 'bili'

const config: Config = {
  input: 'src/index.js',
  output: {
    fileName: 'index[min].js',
    moduleName: 'docuteCustomContainer',
    sourceMap: false
  }
}

export default config
