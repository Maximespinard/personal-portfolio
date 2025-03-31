import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FadeIn, SlideFromLeft } from '../animations';
import ContactSuccess from './contact/ContactSuccess';
import ContactFormFields from './contact/ContactFormFields';
import ContactHeader from './contact/ContactHeader';
import ContactFooter from './contact/ContactFooter';

const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required').email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

export type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
  };

  const resetForm = () => setIsSubmitted(false);

  if (isSubmitted) {
    return <ContactSuccess onReset={resetForm} />;
  }

  return (
    <div className="w-full mx-auto my-12 mt-20 px-4">
      <div className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl overflow-hidden border border-[#2c1250]">
        <SlideFromLeft className="p-10 md:p-12 md:pb-6">
          <ContactHeader />

          <ContactFormFields register={register} errors={errors} />

          <ContactFooter
            onSubmit={handleSubmit(onSubmit)}
            isSubmitting={isSubmitting}
          />
        </SlideFromLeft>
      </div>
    </div>
  );
};

export default ContactForm;
