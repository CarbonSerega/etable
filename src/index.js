import './styles/index.sass'
import { Etable } from './components/etable/Etable'
import { HeaderComponent } from './components/header/HeaderComponent';
import { ToolbarComponent } from './components/toolbar/ToolbarComponent';
import { FormulaComponent } from './components/formula/FormulaComponent';
import { TableComponent } from './components/table/TableComponent';

const etable = new Etable('#app', {
  components: [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent
  ]
})

etable.render()
