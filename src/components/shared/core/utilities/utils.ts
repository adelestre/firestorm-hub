import { NavigateFunction } from 'react-router-dom'
import { NavigationContext } from '../types/contexts'
import { routes } from '../routes'

export function transformStringForUrl(str: string): string {
  return str
    .toLowerCase()
    .replace(/\//g, '')
    .replace(/[^\w\s-]+/g, '')
    .trim()
    .replace(/ /g, '-')
    .replace(/-{2,}/g, '-')
}

export function navigateToSpec(
  navigate: NavigateFunction,
  job_spec: string,
  navigationContext: NavigationContext
) {
  const [job, spec] = job_spec?.split('-') ?? [undefined, undefined]
  if (job && spec) {
    if (
      navigationContext &&
      !window.matchMedia('(min-width: 1024px)').matches
    ) {
      navigationContext.toggleNavigation()
    }
    navigate(`${routes.guide}/${job}/${spec}/mythic-plus`)
  }
}
