import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";

export interface inputField{
    type: 'text' | 'password' | 'email';
    leftIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    value: string;
    errorText: string;
    labelText: string;
    placeholder: string;
    rightIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    error: boolean;
    forgotPassword?: boolean
}