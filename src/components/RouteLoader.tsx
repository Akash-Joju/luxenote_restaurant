"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <LoadingSpinner /> : null;
}
