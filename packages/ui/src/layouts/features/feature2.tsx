import { Button } from '@workspace/ui/components/button.js'

export default function feature2() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">This is Feature 2</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}
