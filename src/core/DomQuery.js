class DomQuery {
  constructor(selector) {
    this.$element = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html
      return this
    }
    return this.$element.outerHTML.trim()
  }

  on(event, callback) {
    this.$element.addEventListener(event, callback)
  }

  off(event, callback) {
    this.$element.removeEventListener(event, callback)
  }

  append(node) {
    if (node instanceof DomQuery) {
      node = node.$element
    }
    if (Element.prototype.append) {
      this.$element.append(node)
    } else {
      this.$element.appendChild(node)
    }
    return this
  }

  clear() {
    this.html('')
    return this
  }
}

export function $(selector) {
  return new DomQuery(selector)
}

$.create = (tagName, classList = '') => {
  const element = document.createElement(tagName)

  if (classList) {
    element.classList.add(classList)
  }
  return $(element)
}
