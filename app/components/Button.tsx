import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Base styles for all buttons
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none";

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500/40 focus:ring-offset-2",
    outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500/40 focus:ring-offset-2",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500/40",
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    xs: "text-xs h-7 px-2",
    sm: "text-sm h-9 px-3",
    md: "text-sm h-10 px-4",
    lg: "text-md h-11 px-5",
  };

  // Icon spacing
  const iconSpacing = icon ? (iconPosition === "left" ? "gap-1.5" : "flex-row-reverse gap-1.5") : "";

  // Full width style
  const widthStyle = fullWidth ? "w-full" : "";

  // Disabled & Loading styles
  const stateStyles = 
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : 
    isLoading ? "opacity-80 cursor-wait" : "";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${iconSpacing} ${widthStyle} ${stateStyles} ${className}`;

  return (
    <button 
      disabled={disabled || isLoading}
      className={buttonStyles}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && icon && iconPosition === "left" && icon}
      {children}
      {!isLoading && icon && iconPosition === "right" && icon}
    </button>
  );
} 