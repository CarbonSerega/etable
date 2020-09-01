const startColumnHeaderNumber = 65
const endColumnHeaderNumber = 90

const toCell = () => `<div class="cell" contenteditable></div>`

const toColumn = (col) => `<div class="column">${col}</div>`

const renderRow = (content, index) => `
    <div class="row">
      <div class="row-header">${index}</div>
      <div class="rows">${content}</div>
    </div>
  `

const toChar = (_, index) =>
  String.fromCharCode(startColumnHeaderNumber + index)

export const renderTable = (rowsCount = 15) => {
  const colsCount = endColumnHeaderNumber - startColumnHeaderNumber + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('').map(toChar).map(toColumn).join('')

  rows.push(renderRow(cols, '#'))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('')
        .map(toCell).join('')
    rows.push(renderRow(cells, i+1))
  }

  return rows.join('')
}
