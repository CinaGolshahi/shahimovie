import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "btn-primary" | "btn-secondary" | "btn-text";
  size?: "btn-sm" | "btn-md" | "btn-lg" | "btn-squ-sm" | "btn-squ-md" | "btn-squ-lg";
}

export type { IButtonProps };
