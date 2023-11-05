'use client'

import { useEffect, useState } from 'react'
import { Search, XCircle } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useDebounce } from 'use-debounce'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { useRouter } from 'next/navigation'

interface SearchInputProps {
  path?: string
}

export function SearchInput({ path = '/' }: SearchInputProps) {
  const router = useRouter()

  const [text, setText] = useState('')
  const [query] = useDebounce(text, 500)

  useEffect(() => {
    router.push(query !== '' ? `${path}?q=${query}` : path)
  }, [query, router, path])

  return (
    <div className="relative w-full">
      <Search size={16} className="absolute bottom-3 left-3 text-zinc-700" />

      <Input
        onChange={(event) => setText(event.target.value)}
        value={text}
        className="pl-9 pr-12 h-10"
        placeholder="Search..."
      />

      {text?.trim() !== '' && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-1 right-1 text-zinc-700"
                onClick={() => setText('')}
              >
                <XCircle size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Apagar</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
