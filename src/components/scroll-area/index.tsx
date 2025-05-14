import React from "react";
import { cn } from "@utils/class-names.util";

export function ScrollArea({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("overflow-y-auto", className)}
            {...props}
        />
    );
}
