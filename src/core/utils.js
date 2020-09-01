export const toCapital = (string='') => {
  if (typeof string !== 'string') {
    return ''
  }
  return string.replace(string[0], string[0].toUpperCase())
}
