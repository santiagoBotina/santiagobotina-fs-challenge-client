import React from "react";
import { cn } from "@utils/class-names.util";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-2xl border bg-white shadow-md p-6 max-w-3xl w-full mx-auto",
                className
            )}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-4", className)} {...props} />
    );
}
