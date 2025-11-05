import { SidebarTrigger } from "@/components/ui/sidebar"

const AppHeader = () => {
  return (
    <header className="flex shrink-0 gap-2 items-center h-14 px-4 border-b bg-background">
        <SidebarTrigger />
    </header>
  )
}

export default AppHeader
