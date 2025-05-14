import React from "react";
import { cn } from "@utils/class-names.util";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => (
        <input
            ref={ref}
            className={cn(
                "flex h-10 w-lg rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
                className
            )}
            {...props}
        />
    )
);
Input.displayName = "Input";
