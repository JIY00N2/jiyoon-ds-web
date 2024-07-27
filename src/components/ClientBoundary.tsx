import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export const ClientBoundary = ({
  fallback,
  children,
}: PropsWithChildren<{ fallback?: ReactNode }>) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return fallback;
  }

  return children;
};
