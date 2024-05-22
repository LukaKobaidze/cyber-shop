import { useState } from "react";

export default function useInputFields<T extends ReadonlyArray<string>[number]>(
  fieldsArr: ReadonlyArray<T>,
) {
  const [fields, setFields] = useState<Record<T, string>>(() => {
    const obj: any = {};

    fieldsArr.forEach((field) => {
      obj[field] = "";
    });

    return obj;
  });
  const [error, setError] = useState<{
    field?: T;
    message: string;
  } | null>(null);

  const onFieldUpdate = (value: string, field: T) => {
    setFields((state) => ({ ...state, [field]: value }));
    setError(null);
  };

  const validateEmpty = (fieldsToValidate?: T[]) => {
    (fieldsToValidate || fieldsArr).forEach((key) => {
      if (fields[key].trim().length === 0) {
        setError({ field: key, message: "Required field is empty." });
        throw new Error();
      }
    });
  };

  return { fields, error, setError, onFieldUpdate, validateEmpty };
}
