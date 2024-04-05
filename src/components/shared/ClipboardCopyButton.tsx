import { useState } from 'react'
import { LuCopy } from 'react-icons/lu'

type Props = {
  text: string
}

function ClipboardCopyButton({ text }: Readonly<Props>) {
  const [copied, setCopied] = useState(false)
  let timeout: NodeJS.Timeout
  const copyToClipboard = () => {
    if (copied) return
    navigator.clipboard.writeText(text)
    setCopied(true)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  return (
    <div className="space-top flex w-full flex-row justify-center">
      <button
        className={`anim border-primary-4 relative flex w-52 flex-row items-center justify-center gap-2 rounded-sm border p-2 py-1 ${copied ? 'bg-green-1' : 'hover:bg-primary-2'}`}
        onClick={copyToClipboard}
      >
        <div className="absolute left-3">
          <LuCopy />
        </div>
        <div className="pl-4">
          {copied ? 'Copied to clipboard!' : 'Copy import code'}
        </div>
      </button>
    </div>
  )
}

export default ClipboardCopyButton
