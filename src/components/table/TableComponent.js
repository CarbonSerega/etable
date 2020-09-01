import { EtableComponent } from '../../core/EtableComponent'
import {renderTable} from './table.template';

export class TableComponent extends EtableComponent {
  static get name() {
    return 'etable__table'
  }

  get html() {
    return renderTable()
  }
}
