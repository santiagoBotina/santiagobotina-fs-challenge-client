import React from "react";
import { cn } from "@utils/class-names.util";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "text-white bg-gradient-to-br from-indigo-500 to-blue-500" +
                " hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300" +
                " dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" +
                className
            )}
            {...props}
        />
    )
);
Button.displayName = "Button";
