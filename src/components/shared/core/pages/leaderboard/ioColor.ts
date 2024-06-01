import ioGradient from './ioGradient.json'

export function getIoColor(fsio: number, theme: boolean | undefined) {
  for (const value of ioGradient) {
    if (fsio >= value.io) return theme ? value.colorDark : value.colorLight
  }
  return theme
    ? ioGradient[ioGradient.length - 1].colorDark
    : ioGradient[ioGradient.length - 1].colorLight
}
