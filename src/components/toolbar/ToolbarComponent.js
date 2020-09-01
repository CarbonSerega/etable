import {EtableComponent} from '../../core/EtableComponent'

export class ToolbarComponent extends EtableComponent {
  static get name() {
    return 'etable__toolbar'
  }
  get html() {
    return ` <div class="button">
            <i class="material-icons">format_align_left</i>
        </div>
        <div class="button">
            <i class="material-icons">format_align_center</i>
        </div>
        <div class="button">
            <i class="material-icons">format_align_right</i>
        </div>
        <div class="button">
            <i class="material-icons">format_bold</i>
        </div>
        <div class="button">
            <i class="material-icons">format_italic</i>
        </div>
        <div class="button">
            <i class="material-icons">format_underline</i>
        </div>`
  }
}
