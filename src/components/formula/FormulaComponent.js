import { EtableComponent } from '../../core/EtableComponent'

export class FormulaComponent extends EtableComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  static get name() {
    return 'etable__formula'
  }
  get html() {
    return ` <div class="info">F(x)</div>
        <div class="input" spellcheck="false" contenteditable="true"></div>`
  }

  onInput(event) {
    console.log('On Input  Formula', event.target.textContent.trim())
  }
}
