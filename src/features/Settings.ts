import { FormEvent, ReactNode } from 'react';
import { UseFormMethods } from 'react-hook-form';

export interface SettingsFormProps {
  locale: 'ru' | 'en'
}
export interface UseSettingFormProps {
  id: string;
  onSubmit?: (value: SettingsFormProps, event: FormEvent<HTMLFormElement>) => void;
  onReset?: (value: SettingsFormProps, event: FormEvent<HTMLFormElement>) => void;
}

export interface UseSettingForm {
  Form: ReactNode;
  isValid: boolean;
  formMethods: UseFormMethods<SettingsFormProps>;
  isDirty: boolean;
}