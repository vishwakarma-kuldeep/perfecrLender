"use client";

import { Download } from "lucide-react";

/** A presentational helper for places that may later expose a separate PDF action. */
export function DownloadEmiOverviewPdf({ onClick, disabled = false }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60">
      <Download className="h-4 w-4" /> Download EMI overview
    </button>
  );
}
