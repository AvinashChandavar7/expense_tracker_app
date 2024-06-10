import React from 'react'
import clsx from "clsx"
import "./Button.css"


// Define your button variants
const buttonVariants = {
  primary: "btn__primary",
  secondary: "btn__secondary",
  icons: "btn__icons"
}

// Utility type to get the keys of buttonVariants
type VariantProps<T> = {
  variant?: keyof T;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  text?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", text, icon, ...props }, ref) => {
    return (
      <button
        className={clsx(buttonVariants[variant], className)}
        ref={ref}
        {...props} >
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button >
    )
  }
)
Button.displayName = "Button"

export { Button }
