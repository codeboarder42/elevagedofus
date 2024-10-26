// components/atoms/Button.tsx
import React from "react";
import type { ComponentType, SVGAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";

interface IconProps extends SVGAttributes<SVGElement> {
  size?: number | string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ComponentType<IconProps>;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  icon: Icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500",
    tertiary:
      "bg-transparent text-green-600 hover:bg-green-50 focus:ring-green-500",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24,
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button type="button" className={classes} {...props}>
      {Icon && iconPosition === "left" && (
        <Icon
          className="inline-block mr-2"
          width={iconSizes[size]}
          height={iconSizes[size]}
        />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon
          className="inline-block ml-2"
          width={iconSizes[size]}
          height={iconSizes[size]}
        />
      )}
    </button>
  );
};

export default Button;
