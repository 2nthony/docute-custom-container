import CustomBlock from './components/CustomBlock'
import parser from './parser'

Vue.component(CustomBlock.name, CustomBlock)

export default function customContainer(options = {}) {
  return {
    name: 'docute-custom-container',
    extend(api) {
      api.processMarkdown(parser(options))
    }
  }
}
