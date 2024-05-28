import { useState } from "react";

export default function useInputFields<T extends keyof Record<string, string>>(
  argFields: Record<T, string>,
) {
  const [fields, setFields] = useState<Record<T, string>>(argFields);
  const [error, setError] = useState<{
    field?: T;
    message: string;
  } | null>(null);

  const onFieldUpdate = (value: string, field: T) => {
    setFields((state) => ({ ...state, [field]: value }));
    setError(null);
  };

  const validateEmpty = (fieldsToValidate?: T[]) => {
    ((fieldsToValidate || Object.keys(fields)) as T[]).forEach((key) => {
      if (fields[key].trim().length === 0) {
        setError({ field: key, message: "Required field is empty." });
        throw new Error();
      }
    });
  };

  return { fields, error, setError, onFieldUpdate, validateEmpty };
}
