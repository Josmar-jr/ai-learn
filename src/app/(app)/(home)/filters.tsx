import { SearchInput } from '@/components/search-input'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export function Filters() {
  return (
    <div className="flex gap-3 mt-6">
      <SearchInput />

      {/* <ToggleGroup.Root
        type="single"
        defaultValue="grid"
        className="flex items-center justify-center border border-zinc-800 rounded-md p-[3px]"
        onValueChange={(value) => console.log(value)}
      >
        <ToggleGroup.Item className={cn(toggleVariants(), '')} value="grid">
          <LayoutGrid size={16} />
        </ToggleGroup.Item>
        <ToggleGroup.Item className={cn(toggleVariants(), '')} value="list">
          <List size={16} />
        </ToggleGroup.Item>
      </ToggleGroup.Root> */}

      <Button size="lg" className="w-40 gap-3 px-3 justify-between">
        Add New... <Plus size={16} />
      </Button>
    </div>
  )
}
