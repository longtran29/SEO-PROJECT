"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { PendingSuppliers } from "@/components/pending-suppliers"
import { PendingEvents } from "@/components/pending-events"
import { ReportedPosts } from "@/components/reported-posts"

export default function Dashboard() {
  const [stats, setStats] = useState({
    submissions: 8,
    totalUsers: 150,
    activePosts: 24,
    reportedContent: 2,
  })

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Supplier Name", description: "Supplier description text" },
    { id: 2, name: "Supplier Name", description: "Supplier description text" },
  ])

  const [events, setEvents] = useState([
    { id: 1, name: "Event Name", description: "Event description text" },
    { id: 2, name: "Event Name", description: "Event description text" },
  ])

  const [posts, setPosts] = useState([
    { id: 1, title: "Post Title", excerpt: "Post excerpt text", content: "Full post content" },
    { id: 2, title: "Post Title", excerpt: "Post excerpt text", content: "Full post content" },
    { id: 3, title: "Post Title", excerpt: "Post excerpt text", content: "Full post content" },
    { id: 4, title: "Post Title", excerpt: "Post excerpt text", content: "Full post content" },
  ])

  const handleApproveSupplier = (id: number) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id))
  }

  const handleApproveEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const handleRejectEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Admin Dashboard" />
      <div className="grid gap-6">
        <StatsCards stats={stats} />
        <div className="grid gap-6 md:grid-cols-2">
          <PendingSuppliers suppliers={suppliers} onApprove={handleApproveSupplier} />
          <PendingEvents events={events} onApprove={handleApproveEvent} onReject={handleRejectEvent} />
        </div>
        <ReportedPosts posts={posts} />
      </div>
    </DashboardShell>
  )
}
