import type React from "react"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="container flex-1 space-y-4 p-8 pt-6">
          <div className={cn("flex flex-col gap-4", className)} {...props}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
