import * as z from 'zod';

export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name cannot exceed 50 characters')
  .regex(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces');

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address')
  .max(100, 'Email cannot exceed 100 characters');

export const messageSchema = z
  .string()
  .min(10, 'Message must be at least 10 characters')
  .max(500, 'Message cannot exceed 500 characters');

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
