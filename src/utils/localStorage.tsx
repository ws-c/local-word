
export const setLocalIndex = (index: number) => {
  if (typeof window !== 'undefined'){
  localStorage.setItem('index', '' +index)
  }
}

export const getLocalIndex = () => {
  if (typeof window !== 'undefined'){
  return parseInt(localStorage.getItem('index') || '1')
  }
}
export const setLocalTheme = (theme: string) => {
  if (typeof window !== 'undefined'){
  localStorage.setItem('theme', theme)
  }
}

export const getLocalTheme = () => {
  if (typeof window !== 'undefined'){
  return localStorage.getItem('theme') || 'light'
  }
}