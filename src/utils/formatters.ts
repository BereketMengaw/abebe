export function formatDate(date: Date | undefined) {
  if (!date || !(date instanceof Date)) {
    return ''
