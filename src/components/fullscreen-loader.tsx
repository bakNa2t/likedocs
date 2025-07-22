import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullScreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen">
      <LoaderIcon className="size-6 animate-spin text-muted-foreground" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
