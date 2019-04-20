const defaultContainers = ['tip', 'warning', 'danger']

export const endTag = ':::'
export const endTagLen = endTag.length

export function createRE(containers = []) {
  return `:{3}\\s*?(${containers
    .concat(defaultContainers)
    .join('|')})(.?[\\w]*)`
}

export function parseContainer(container, registerContainer) {
  const [tag, type, title] = container.match(
    new RegExp(createRE(registerContainer))
  )
  const content = container.slice(tag.length, container.length - endTagLen)

  return {
    type,
    title: title.trim(),
    content: `${content}`
  }
}
