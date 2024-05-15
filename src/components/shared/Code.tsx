import { useState } from 'react'
import { LuCheck, LuCopy } from 'react-icons/lu'

type Props = {
  text: string
}

function Code({ text }: Readonly<Props>) {
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
    <div className="space-top group relative w-full rounded-md border border-light-primary-3 bg-light-primary-2 p-4 dark:border-black dark:bg-dark-primary-0">
      <button
        className={`anim border-primary-4 absolute right-1 top-1 h-6 w-6 flex-row items-center justify-center gap-6 rounded-sm border p-2 py-1 transition-colors ${copied ? 'flex text-lg text-green-600' : 'hover:bg-primary-3 hidden text-xs group-hover:flex'}`}
        onClick={copyToClipboard}
      >
        <div>{copied ? <LuCheck /> : <LuCopy />}</div>
      </button>
      <p className="font-mono whitespace-pre-line text-left">{text}</p>
    </div>
  )
}

export default Code
