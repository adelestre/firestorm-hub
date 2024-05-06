type Props = {
  id: string
  title: string
}

function YoutubeEmbed({ id, title }: Readonly<Props>) {
  return (
    <div className="space-top border-accent-2 w-full rounded-lg border-4 p-2">
      <iframe
        className="aspect-video w-full rounded-lg"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

export default YoutubeEmbed
