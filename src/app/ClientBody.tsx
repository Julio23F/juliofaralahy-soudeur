"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container">{children}</div>
    </div>
  );
}
