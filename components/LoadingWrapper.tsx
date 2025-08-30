import { Loader } from "lucide-react";
import React from "react";

interface LoadingErrorWrapperProps {
  loading: boolean;
  error?: any;
  children: React.ReactNode;
  spinnerSize?: number;
  isError?: boolean;
}

const LoadingErrorWrapper: React.FC<LoadingErrorWrapperProps> = ({
  loading,
  isError,
  error,
  children,
  spinnerSize = 24,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-4 min-h-24">
        <Loader
          className="animate-spin text-muted-foreground"
          style={{ width: spinnerSize, height: spinnerSize }}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center min-h-24 p-4">
        Error: {error || "Something went wrong."}
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingErrorWrapper;
