import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { BarChart, List, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Level = 'ease' | 'medium' | 'hard'

export function Lesson() {
  const level: Level = 'hard'

  return (
    <Card asChild>
      <Link
        href="/"
        className="w-full h-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-blue-500 hover:bg-zinc-900 transition-colors"
      >
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <Image
              src="https://github.com/josmar-jr.png"
              alt="Lesson logo"
              width={40}
              height={40}
              className="rounded-full h-10 w-10 ring-2 ring-blue-500 ring-offset-2 ring-offset-zinc-950"
            />

            <div>
              <span className="text-lg font-medium">React avançado</span>
              <p className="text-muted-foreground text-sm">
                Focado no uso de hooks
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-auto self-start"
            >
              <line
                x1="12"
                x2="12"
                y1="20"
                y2="10"
                className={`${
                  level !== 'ease' ? 'text-white' : 'text-white/30'
                }`}
              />
              <line
                x1="18"
                x2="18"
                y1="20"
                y2="4"
                className={`${
                  level === 'hard' ? 'text-white' : 'text-white/30'
                }`}
              />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
          </div>

          <p className="text-muted-foreground text-sm my-6">
            Non voluptate sit commodo minim ex elit Lorem. Tempor aute voluptate
            aliquip laboris laborum tempor consectetur tempor. Consequat ad enim
            id sunt proident. Amet ea laboris irure eu ad aute ipsum quis Lorem
            non amet incididunt ipsum enim.
          </p>

          <CardFooter className="p-0 gap-5">
            <span className="flex gap-1 items-center text-muted-foreground text-sm">
              <Timer size={16} />
              10 - 20 min
            </span>
            <span className="flex gap-1 items-center text-muted-foreground text-sm">
              <List size={16} />
              20 questões
            </span>
          </CardFooter>
        </CardContent>
      </Link>
    </Card>
  )
}
