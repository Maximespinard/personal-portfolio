import * as z from 'zod';
import enTranslations from '../locales/en';
import frTranslations from '../locales/fr';

// Since this is outside React, we need to handle translations differently
type ValidationMessages = {
  name: {
    min: string;
    max: string;
    format: string;
  };
  email: {
    required: string;
    invalid: string;
    max: string;
  };
  message: {
    min: string;
    max: string;
  };
};

// Get validation messages based on language
export const getValidationSchemas = (language: 'en' | 'fr' = 'en') => {
  const translations = language === 'en' ? enTranslations : frTranslations;
  const messages = translations.contact.validation as ValidationMessages;

  const nameSchema = z
    .string()
    .min(2, messages.name.min)
    .max(50, messages.name.max)
    .regex(/^[A-Za-z\s]+$/, messages.name.format);

  const emailSchema = z
    .string()
    .min(1, messages.email.required)
    .email(messages.email.invalid)
    .max(100, messages.email.max);

  const messageSchema = z
    .string()
    .min(10, messages.message.min)
    .max(500, messages.message.max);

  const contactFormSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    message: messageSchema,
  });

  return { nameSchema, emailSchema, messageSchema, contactFormSchema };
};

// Export default schemas with English
export const { nameSchema, emailSchema, messageSchema, contactFormSchema } =
  getValidationSchemas('en');

export type ContactFormData = z.infer<typeof contactFormSchema>;
