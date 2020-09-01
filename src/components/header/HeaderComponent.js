import {EtableComponent} from '../../core/EtableComponent'

export class HeaderComponent extends EtableComponent {
  static get name() {
    return 'etable__header'
  }
  get html() {
    return `
    <input  type="text" class="input" value="New E-TableComponent">
        <div>
            <div class="button">
                <i class="material-icons">delete_outline</i>
            </div>
            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
        </div>
    `
  }
}
