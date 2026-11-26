import { z } from "zod";

export const hospitalRegisterSchema = z.object({
  hospitalName: z.string().min(3, "Hospital name must contain at least 3 characters"),
  email: z.string().email("Enter a valid email address")
});

export const ambulanceRegisterSchema = z.object({
  serviceName: z.string().min(3, "Service name must contain at least 3 characters"),
  email: z.string().email("Enter a valid email address")
});