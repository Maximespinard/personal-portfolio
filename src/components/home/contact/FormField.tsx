import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormData } from '../ContactForm';

interface FormFieldProps {
  id: keyof FormData;
  label: string;
  type: 'text' | 'email' | 'textarea';
  register: UseFormRegister<FormData>;
  error?: FieldError;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  register,
  error,
  rows = 4,
}) => {
  return (
    <div>
      <div className="relative group">
        {type === 'textarea' ? (
          <textarea
            id={id}
            {...register(id)}
            rows={rows}
            className={`w-full bg-[#251c31]/50 border-2 ${
              error
                ? 'border-red-500'
                : 'border-[#2c1250] group-hover:border-[#693b93]'
            } rounded-xl p-4 text-white outline-none focus:border-[#7127ba] transition-colors h-full min-h-[140px]`}
            placeholder={label}
          />
        ) : (
          <input
            type={type}
            id={id}
            {...register(id)}
            className={`w-full bg-[#251c31]/50 border-2 ${
              error
                ? 'border-red-500'
                : 'border-[#2c1250] group-hover:border-[#693b93]'
            } rounded-xl p-4 text-white outline-none focus:border-[#7127ba] transition-colors`}
            placeholder={label}
          />
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormField;
