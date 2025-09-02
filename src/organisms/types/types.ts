import type { LucideProps } from "lucide-react";

export interface FieldDataProps{
    type: 'text' | 'password' | 'email';
    labelText: string;
    errorText: string;
    value: string;
    leftIcon: React.ComponentType<LucideProps>;
    error: boolean;
    placeholder: string;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    blurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    focusHandler: () => void;
}