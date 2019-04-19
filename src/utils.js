const defaultContainers = ['tip', 'warning', 'danger']

export const endTag = ':::'
export const endTagLen = endTag.length

export function createRE(containers = []) {
  return `:{3}\\s*?(${containers
    .concat(defaultContainers)
    .join('|')})(.?[\\w]*)`
}

export function parseContainer(container, registerContainers) {
  const [tag, type, title] = container.match(
    new RegExp(createRE(registerContainers))
  )
  const content = container.slice(tag.length, container.length - endTagLen)

  return {
    type,
    title: title.trim(),
    content: `${content}`
  }
}
