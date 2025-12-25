import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                {
                    "bg-primary text-primary-foreground shadow-lg hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]": variant === "default",
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-105": variant === "secondary",
                    "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                    "h-9 px-4 py-2": size === "default",
                    "h-8 rounded-md px-3 text-xs": size === "sm",
                    "h-10 rounded-md px-8": size === "lg",
                    "h-12 rounded-full px-8 text-base": size === "xl",
                },
                className
            )}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button }
