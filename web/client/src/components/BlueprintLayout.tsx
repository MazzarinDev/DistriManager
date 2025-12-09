import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlueprintLayoutProps {
  children: ReactNode;
  className?: string;
}

export function BlueprintLayout({ children, className }: BlueprintLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background text-foreground relative overflow-hidden", className)}>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Technical Overlay Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-10 bottom-0 w-[1px] bg-primary/20"></div>
        <div className="absolute top-0 right-10 bottom-0 w-[1px] bg-primary/20"></div>
        <div className="absolute top-20 left-0 right-0 h-[1px] bg-primary/20"></div>
        <div className="absolute bottom-20 left-0 right-0 h-[1px] bg-primary/20"></div>
        
        {/* Crosshairs */}
        <div className="absolute top-20 left-10 w-4 h-4 border-l border-t border-primary"></div>
        <div className="absolute top-20 right-10 w-4 h-4 border-r border-t border-primary"></div>
        <div className="absolute bottom-20 left-10 w-4 h-4 border-l border-b border-primary"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 border-r border-b border-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function TechnicalCard({ children, className, title, number }: { children: ReactNode, className?: string, title?: string, number?: string }) {
  return (
    <div className={cn("bg-card/50 backdrop-blur-sm border border-primary/30 p-6 relative group hover:border-primary/60 transition-colors", className)}>
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-l-2 border-t-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-r-2 border-b-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Header */}
      {(title || number) && (
        <div className="flex justify-between items-center mb-4 border-b border-primary/20 pb-2">
          {title && <h3 className="text-lg font-bold uppercase tracking-wider text-primary">{title}</h3>}
          {number && <span className="font-mono text-xs text-muted-foreground">{number}</span>}
        </div>
      )}
      
      {children}
    </div>
  );
}
