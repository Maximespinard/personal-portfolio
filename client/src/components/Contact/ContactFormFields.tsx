import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SlideFromRight } from '../animations';
import { ContactFormData } from '../../utils/formValidations';
import FormField from './FormField';

interface ContactFormFieldsProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  register,
  errors,
  t,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <SlideFromRight delay={0.1} className="space-y-6">
        <FormField
          id="name"
          type="text"
          label={t('contact.form.name')}
          register={register}
          error={errors.name}
        />

        <FormField
          id="email"
          type="email"
          label={t('contact.form.email')}
          register={register}
          error={errors.email}
        />
      </SlideFromRight>

      <SlideFromRight delay={0.2} className="space-y-6">
        <FormField
          id="message"
          type="textarea"
          label={t('contact.form.message')}
          register={register}
          error={errors.message}
          rows={4}
        />
      </SlideFromRight>
    </div>
  );
};

export default ContactFormFields;
