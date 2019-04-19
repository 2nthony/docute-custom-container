export const endTag = ':::'
export const endTagLen = endTag.length
export const re = ':{3}\\s*?(tip|warning|danger)(.?[\\w]*)'

export function parseContainer(container) {
  const [tag, type, title] = container.match(new RegExp(re))
  const content = container.slice(tag.length, container.length - endTagLen)

  return {
    type,
    title: title.trim(),
    content: `${content}`
  }
}
