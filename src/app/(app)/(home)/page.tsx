import { Filters } from './filters'
import { Lesson } from './lesson'

export default function Home() {
  return (
    <div>
      <Filters />

      <div className="grid grid-cols-3 gap-6 mt-10">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <Lesson key={index} />
        ))}
      </div>
    </div>
  )
}
