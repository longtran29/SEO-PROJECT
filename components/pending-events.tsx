"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Event {
  id: number
  name: string
  description: string
}

interface PendingEventsProps {
  events: Event[]
  onApprove: (id: number) => void
  onReject: (id: number) => void
}

export function PendingEvents({ events, onApprove, onReject }: PendingEventsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Events</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground">No pending events</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => onApprove(event.id)}>
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => onReject(event.id)}>
                    Reject
                  </Button>
                </div>
              </div>
              <Separator className="mt-2" />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
