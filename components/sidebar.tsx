"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Calendar, FileText, UserCog } from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function Sidebar({ className }: SidebarNavProps) {
  const pathname = usePathname()

  const items = [
    {
      href: "/",
      title: "Dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      href: "/pending-suppliers",
      title: "Pending Suppliers",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      href: "/pending-events",
      title: "Pending Events",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      href: "/moderate-posts",
      title: "Moderate Posts",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      href: "/user-management",
      title: "User Management",
      icon: <UserCog className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="border-r bg-background">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center font-bold">
          Admin Dashboard
        </Link>
      </div>
      <div className="space-y-1 py-4">
        {items.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href ? "bg-secondary" : "hover:bg-transparent hover:underline",
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
