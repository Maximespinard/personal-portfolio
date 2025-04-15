import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useBotProtection } from '../../hooks/useBotProtection';
import { submitContactForm } from '../../services/contactApi';
import {
  contactFormSchema,
  ContactFormData,
} from '../../utils/formValidations';
import { useLanguage } from '../../contexts';
import { SlideFromLeft } from '../animations';

import ContactSuccess from './ContactSuccess';
import ContactError from './ContactError';
import ContactFormFields from './ContactFormFields';
import ContactHeader from './ContactHeader';
import ContactFooter from './ContactFooter';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { BotProtectionField, formToken, validateSubmission } =
    useBotProtection();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!validateSubmission()) {
      console.warn('Potential bot detected');
      return;
    }

    setFormStatus('submitting');

    try {
      await submitContactForm({
        ...data,
        token: formToken,
      });

      setFormStatus('success');
      reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);

      let message = 'Failed to send your message. Please try again.';

      // Handle specific error types
      if (error instanceof Error) {
        if (error.message.includes('too many messages')) {
          message =
            'You have reached the message limit. Please try again later.';
        } else if (error.message.includes('network')) {
          message =
            'Network error. Please check your connection and try again.';
        } else if (error.message) {
          // Use the error message if it exists
          message = error.message;
        }
      }

      setErrorMessage(message);
      setFormStatus('error');
    }
  };

  const resetForm = () => {
    setFormStatus('idle');
    setErrorMessage('');
  };

  if (formStatus === 'success') {
    return <ContactSuccess onReset={resetForm} props={{ t }} />;
  }

  if (formStatus === 'error') {
    return <ContactError onRetry={resetForm} errorMessage={errorMessage} />;
  }

  return (
    <div id="contact-section" className="w-full mb-12">
      <div className="mx-auto sm:px-6 lg:px-20 2xl:px-[20%]">
        <div className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl overflow-hidden border border-[#2c1250]">
          <SlideFromLeft className="p-10 md:p-12 md:pb-6" delay={0.25}>
            <ContactHeader t={t} />
            <ContactFormFields register={register} errors={errors} t={t} />

            <BotProtectionField
              onProtectionReady={({ formToken }) => {
                console.log('Protection ready', { formToken });
              }}
            />

            <ContactFooter
              onSubmit={handleSubmit(onSubmit)}
              isSubmitting={formStatus === 'submitting'}
              t={t}
            />
          </SlideFromLeft>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
