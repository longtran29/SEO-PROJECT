import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardsProps {
  stats: {
    submissions: number
    totalUsers: number
    activePosts: number
    reportedContent: number
  }
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.submissions}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUsers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activePosts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Reported Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.reportedContent}</div>
        </CardContent>
      </Card>
    </div>
  )
}
