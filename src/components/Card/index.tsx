import { cn } from "@Minecart/lib/utils";

export interface CardHeaderProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <h2 className={cn("p-3 pb-0", className)} {...props}>
      {children}
    </h2>
  );
};

export interface CardContentProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-3", className)} {...props}>
      {children}
    </div>
  );
};

export interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn("w-full bg-white border", className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent, CardHeader };
