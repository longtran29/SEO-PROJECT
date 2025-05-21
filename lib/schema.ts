import { z } from "zod"

export const supplierSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional(),
})

export const eventSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  date: z.date({ required_error: "Please select a date" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
})

export const postSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  content: z.string().min(20, { message: "Content must be at least 20 characters" }),
})

export type Supplier = z.infer<typeof supplierSchema>
export type Event = z.infer<typeof eventSchema>
export type Post = z.infer<typeof postSchema>
