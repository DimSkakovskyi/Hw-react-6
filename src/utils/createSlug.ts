export const createSlug = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-')
}
