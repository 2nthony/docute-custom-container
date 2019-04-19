import { re, endTag, endTagLen, parseContainer } from './utils'

export default function({ defaultTitle }) {
  return function(text) {
    const ContainerRE = new RegExp(re, 'g')
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

      const { type, title, content } = parseContainer(container)

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
