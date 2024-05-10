export type SectionTitleProps = {
  level?: number
  name: string
  reference: React.Ref<HTMLElement> | null
}

function SectionTitle({ level, name, reference }: Readonly<SectionTitleProps>) {
  switch (level) {
    case 0:
      return (
        <h2
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-2 space-top text-size-5"
        >
          {name}
        </h2>
      )
    case 1:
      return (
        <h3
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-3 space-top text-size-4"
        >
          {name}
        </h3>
      )
    case 2:
      return (
        <h4
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-4 space-top text-size-3"
        >
          {name}
        </h4>
      )
    case 3:
    default:
      return (
        <h5
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-5 space-top text-size-1"
        >
          {name}
        </h5>
      )
  }
}

export default SectionTitle
