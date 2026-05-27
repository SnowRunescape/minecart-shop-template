import { cn } from "@Minecart/lib/utils";

type LoadingProps = {
  title?: string;
  description?: string;
  variant?: "page" | "screen" | "inline";
  className?: string;
};

const Loading = ({
  title = "Carregando",
  description = "Aguarde enquanto preparamos tudo para voce.",
  variant = "page",
  className,
}: LoadingProps) => {
  const content = (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative grid h-14 w-14 place-items-center">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[var(--color1)]" />
        <div className="h-3 w-3 rounded-full bg-primary" />
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-950">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  if (variant === "screen") {
    return (
      <div
        className={cn(
          "grid min-h-screen place-items-center bg-background p-6",
          className
        )}
      >
        {content}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("grid min-h-40 place-items-center p-5", className)}>
        {content}
      </div>
    );
  }

  return (
    <div className={cn("soft-panel grid min-h-64 place-items-center p-8", className)}>
      {content}
    </div>
  );
};

export default Loading;
