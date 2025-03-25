'use client';
import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = ({
  label,
  id,
  ...rest
}: InputFieldProps): React.ReactElement => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border-gray-300 shadow"
      />
    </div>
  );
};

export default InputField;
