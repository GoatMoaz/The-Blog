import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  message = "Something went wrong",
}: {
  message?: string;
}) {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Oops!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {message}. Please try again.
      </p>
      <Button onClick={handleRetry} className="flex items-center gap-2">
        <RefreshCw className="h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
}
