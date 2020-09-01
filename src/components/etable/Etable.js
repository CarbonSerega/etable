import { $ } from '../../core/DomQuery'

export class Etable {
  constructor(selector, options) {
    this.$element = $(selector)
    this.components = options.components || []
  }

  get root() {
    const $root = $.create('div', 'etable')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.name)
      const component = new Component($el)
      $el.html(component.html)
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$element.append(this.root)
    this.components.forEach(component => component.onInit())
  }
}
