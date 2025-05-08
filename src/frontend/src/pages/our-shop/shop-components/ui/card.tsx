import * as React from "react"

import { cn } from "./utils"


const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm bg-rose-50 group", className)} {...props} />
  ))
  Card.displayName = "Card"
  
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
  )
  CardContent.displayName = "CardContent"

export { Card, CardContent }