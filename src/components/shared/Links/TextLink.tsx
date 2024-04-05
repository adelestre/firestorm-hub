import { ReactNode } from 'react'

type Props = {
  link?: string
  text: string | ReactNode
}

function TextLink({ link, text }: Readonly<Props>) {
  return link ? (
    <a
      className="anim text-accent-2 hover:text-accent-3 peer-hover:text-accent-3"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  ) : (
    <span className="anim text-accent-2 hover:text-accent-3 peer-hover:text-accent-3">
      {text}
    </span>
  )
}

export default TextLink
