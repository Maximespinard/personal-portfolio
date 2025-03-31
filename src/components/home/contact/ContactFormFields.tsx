import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SlideFromRight } from '../../animations';
import { FormData } from '../ContactForm';
import FormField from './FormField';

interface ContactFormFieldsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <SlideFromRight delay={0.1} className="space-y-6">
        <FormField
          id="name"
          type="text"
          label="Your name"
          register={register}
          error={errors.name}
        />

        <FormField
          id="email"
          type="email"
          label="Your email"
          register={register}
          error={errors.email}
        />
      </SlideFromRight>

      <SlideFromRight delay={0.2} className="space-y-6">
        <FormField
          id="message"
          type="textarea"
          label="Your message"
          register={register}
          error={errors.message}
          rows={4}
        />
      </SlideFromRight>
    </div>
  );
};

export default ContactFormFields;
