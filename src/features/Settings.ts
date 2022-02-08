import { FormEvent, ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface SettingsFormProps {
  locale: 'ru' | 'en'
}
export interface UseSettingFormProps {
  id: string;
  onSubmit?: (value: SettingsFormProps, event: FormEvent<HTMLFormElement>) => void;
  onReset?: (value: SettingsFormProps, event: FormEvent<HTMLFormElement>) => void;
  logout?: () => void;
}

export interface UseSettingForm {
  Form: ReactNode;
  isValid: boolean;
  formMethods: UseFormReturn<SettingsFormProps>;
  isDirty: boolean;
}