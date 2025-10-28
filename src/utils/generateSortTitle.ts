export const generateSortTitle = (sortQuery:string | null | undefined, sortKey: string | null | undefined) => {
  if (!sortQuery || !sortKey) return ''

  const isDescending = sortQuery.startsWith('-')
    const fieldName = isDescending ? sortKey.slice(1) : sortKey
    const direction = isDescending ? 'descending' : 'ascending'

    return `sorted by ${fieldName}, ${direction}`
}
