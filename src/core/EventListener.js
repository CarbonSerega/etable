import { toCapital } from './utils'

export class EventListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`The root cannot be null or undefined!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  subscribe() {
    this.listeners.forEach(listener => {
      const method = `on${toCapital(listener)}`
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented 
        ${this.name || ''} Component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  unsubscribe() {
    this.listeners.forEach(listener => {
      const method = `on${toCapital(listener)}`
      this.$root.off(listener, this[method])
    })
  }
}
