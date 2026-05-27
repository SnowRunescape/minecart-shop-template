import { cn } from "@Minecart/lib/utils";

export interface CardHeaderProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <h2 className={cn("px-5 pt-5 text-lg font-bold text-gray-950", className)} {...props}>
      {children}
    </h2>
  );
};

export interface CardContentProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-5", className)} {...props}>
      {children}
    </div>
  );
};

export interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn("soft-panel w-full", className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent, CardHeader };
