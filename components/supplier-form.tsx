"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supplierSchema } from "@/lib/schema"

export function SupplierForm() {
  const form = useForm<z.infer<typeof supplierSchema>>({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
      website: "",
    },
  })

  function onSubmit(values: z.infer<typeof supplierSchema>) {
    console.log(values)
    // In a real app, you would submit this data to your API
    alert("Supplier application submitted!")
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Supplier</CardTitle>
        <CardDescription>Fill out the form below to add a new supplier to the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormDescription>The official name of the supplier company.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="contact@example.com" {...field} />
                  </FormControl>
                  <FormDescription>The primary contact email for the supplier.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the supplier's products or services..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>A brief description of what the supplier offers.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormDescription>The supplier's official website.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Application</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
