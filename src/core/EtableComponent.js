import { EventListener } from './EventListener'

export class EtableComponent extends EventListener {
  constructor($root, options={}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  get html() {
    return ''
  }

  onInit() {
    this.subscribe()
  }

  onDestroy() {
    this.unsubscribe()
  }
}
