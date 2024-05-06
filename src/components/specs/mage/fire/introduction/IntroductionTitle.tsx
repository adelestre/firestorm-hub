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
      <p className="eco text-size-3 text-secondary-4">
        Updated for Season 1 Dragonflight (Firestorm)
      </p>
      <h1 className="title-1 text-size-6">A Fire mage guide</h1>
      <h1 className="title-2 text-size-6">
        From basics to advanced tips for{' '}
        {contentContext.content === 'mythic-plus' ? 'Mythic+' : 'Raid'}
      </h1>
      <Separator />
      <img
        className="rounded-sm"
        src="/assets/fire_mage_banner.webp"
        alt="Fire Mage Guide"
      />
      <h2
        ref={reference as React.Ref<HTMLHeadingElement>}
        className="title-2 space-top text-size-5"
      >
        {name}
      </h2>
    </div>
  ) : null
}

export default IntroductionTitle
