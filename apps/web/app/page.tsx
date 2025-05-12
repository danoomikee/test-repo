import { Button } from "@workspace/ui/components/button"
import { AppShell } from "@workspace/ui/layouts/LayoutBuilder"
import { mainSystemConfig1 } from "./temp-data"

export default function Page() {
  return (
    <AppShell config={mainSystemConfig1}>
      {/* // these are the assumed children of the AppShell component */}
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
    </AppShell>
    
  )
}
