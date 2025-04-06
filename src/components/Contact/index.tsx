import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useBotProtection } from '../../hooks/useBotProtection';
import { submitContactForm } from '../../services/contactApi';
import {
  contactFormSchema,
  ContactFormData,
} from '../../utils/formValidations';
import { SlideFromLeft } from '../animations';

import ContactSuccess from './ContactSuccess';
import ContactFormFields from './ContactFormFields';
import ContactHeader from './ContactHeader';
import ContactFooter from './ContactFooter';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { BotProtectionField, formToken, validateSubmission } =
    useBotProtection();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!validateSubmission()) {
      console.warn('Potential bot detected');
      return;
    }

    try {
      await submitContactForm({
        ...data,
        token: formToken,
        // TODO: change this when BE ready
        submissionTime: Date.now(),
      });

      setIsSubmitted(true);
      reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const resetForm = () => setIsSubmitted(false);

  if (isSubmitted) {
    return <ContactSuccess onReset={resetForm} />;
  }

  return (
    <div id="contact-section" className="w-full mb-12">
      <div className="mx-auto sm:px-6 lg:px-20 2xl:px-[20%]">
        <div className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl overflow-hidden border border-[#2c1250]">
          <SlideFromLeft
            className="p-10 md:p-12 md:pb-6"
            delay={0.25}
            duration={1}
          >
            <ContactHeader />
            <ContactFormFields register={register} errors={errors} />

            <BotProtectionField
              onProtectionReady={({ formToken }) => {
                console.log('Protection ready', { formToken });
              }}
            />

            <ContactFooter
              onSubmit={handleSubmit(onSubmit)}
              isSubmitting={isSubmitting}
            />
          </SlideFromLeft>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
