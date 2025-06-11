"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { CheckCheck } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  size?: number;
}

export function CopyButton({
  textToCopy,
  className,
  size = 16,
}: CopyButtonProps) {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return copied ? (
    <CheckCheck size={size} className={className} onClick={handleCopy} />
  ) : (
    <Copy size={size} className={className} onClick={handleCopy} />
  );
}
