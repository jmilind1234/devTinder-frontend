import type { LucideProps } from "lucide-react";

export interface inputField{
    classes?: string;
    type: 'text' | 'password' | 'email';
    leftIcon: React.ComponentType<LucideProps>;
    value: string;
    errorText: string;
    labelText: string;
    placeholder: string;
    rightIcon?: React.ComponentType<LucideProps>;
    error: boolean;
    forgotPassword?: boolean;
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    blurHandler?: (e: React.FocusEvent<HTMLInputElement>) => void;
    focusHandler?: () => void;
}