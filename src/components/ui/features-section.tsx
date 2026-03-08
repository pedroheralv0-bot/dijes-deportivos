"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturesSectionWithHoverEffects({
  features,
  className,
}: {
  features: Feature[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative bg-card-dark rounded-xl border border-border-dark p-6 hover:border-gold/50 transition-all duration-300 overflow-hidden">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4 text-gold group-hover:bg-gold/20 transition-colors">
          {feature.icon}
        </div>
        <h4 className="font-bold text-white mb-2 text-sm">{feature.title}</h4>
        <p className="text-[#999] text-xs leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
