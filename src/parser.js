import { createRE, endTag, endTagLen, parseContainer } from './utils'

export default function({ defaultTitle, registerContainers = [] }) {
  return function(text) {
    const ContainerRE = new RegExp(createRE(registerContainers), 'g')
    const containers = text.match(ContainerRE) || []
    let outputString = text

    let startTag
    let flag = 0

    let containerStart
    let containerEnd

    containers.forEach(containerTag => {
      startTag = containerTag

      containerStart = text.indexOf(startTag, flag)
      containerEnd =
        text.indexOf(endTag, containerStart + containerTag.length) + endTagLen

      const container = text.slice(containerStart, containerEnd)

      const { type, title, content } = parseContainer(
        container,
        registerContainers
      )

      outputString = outputString.replace(
        container,
        `<DocuteCustomContainer type="${type}" title="${
          !title && defaultTitle ? type : title
        }">\n${content}\n</DocuteCustomContainer>`
      )

      flag = containerEnd
    })

    return outputString
  }
}
