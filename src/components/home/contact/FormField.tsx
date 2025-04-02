import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormData } from '.';

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
            className={`w-full bg-stack-bg/50 border-2 ${
              error
                ? 'border-red-500'
                : 'border-button-bg group-hover:border-button-border'
            } rounded-xl p-4 text-white outline-none focus:border-main-purple transition-colors h-full min-h-[140px]`}
            placeholder={label}
          />
        ) : (
          <input
            type={type}
            id={id}
            {...register(id)}
            className={`w-full bg-stack-bg/50 border-2 prevent-autofill ${
              error
                ? 'border-red-500'
                : 'border-button-bg group-hover:border-button-border'
            } rounded-xl p-4 text-white outline-none focus:border-main-purple transition-colors`}
            placeholder={label}
          />
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormField;
