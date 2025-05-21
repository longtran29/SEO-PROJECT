"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Supplier {
  id: number
  name: string
  description: string
}

interface PendingSuppliersProps {
  suppliers: Supplier[]
  onApprove: (id: number) => void
}

export function PendingSuppliers({ suppliers, onApprove }: PendingSuppliersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Suppliers</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {suppliers.length === 0 ? (
          <p className="text-sm text-muted-foreground">No pending suppliers</p>
        ) : (
          suppliers.map((supplier) => (
            <div key={supplier.id} className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{supplier.name}</h3>
                  <p className="text-sm text-muted-foreground">{supplier.description}</p>
                </div>
                <Button size="sm" onClick={() => onApprove(supplier.id)}>
                  Approve
                </Button>
              </div>
              <Separator className="mt-2" />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
