import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "btn-primary" | "btn-secondary" | "btn-text";
  size?: "btn-sm" | "btn-md" | "btn-lg";
}

export type { IButtonProps };
