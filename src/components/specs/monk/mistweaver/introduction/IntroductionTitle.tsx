import { useContentContext } from '@shared/core/contexts/Contexts'
import Separator from '@shared/Separator'

type TitleProps = {
  name: string
  reference: React.Ref<HTMLElement> | null
}

function IntroductionTitle({ name, reference }: Readonly<TitleProps>) {
  const contentContext = useContentContext()
  return contentContext ? (
    <div>
      <p className="eco text-size-2 text-secondary-4">
        Updated for Season 1 Dragonflight (Firestorm)
      </p>
      <h1 className="title-1 text-size-5">A Mistweaver guide</h1>
      <h1 className="title-2 text-size-5">
        From basics to advanced tips for{' '}
        {contentContext.content === 'mythic-plus' ? 'Mythic+' : 'Raid'}
      </h1>
      <Separator />
      <img
        className="rounded-sm"
        src="/assets/monk-mistweaver.webp"
        alt="Mistweaver Monk Guide"
      />
      <h2
        ref={reference as React.Ref<HTMLHeadingElement>}
        className="title-2 space-top text-size-4"
      >
        {name}
      </h2>
    </div>
  ) : null
}

export default IntroductionTitle
